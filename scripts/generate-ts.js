'use strict';

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SPEC_URLS = {
  stable: 'https://raw.githubusercontent.com/wellnessliving/openapi/main/stable/openapi.yaml',
  dev: 'https://raw.githubusercontent.com/wellnessliving/openapi/main/dev/openapi.yaml',
};

const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);

function fetchText(url, redirectsLeft)
{
  if (redirectsLeft === undefined) redirectsLeft = 5;
  return new Promise((resolve, reject) =>
  {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 120000 }, (res) =>
    {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
      {
        if (redirectsLeft <= 0) { reject(new Error('Too many redirects')); return; }
        fetchText(res.headers.location, redirectsLeft - 1).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode)); return; }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout: ' + url)); });
  });
}

function resolveRef(spec, ref)
{
  if (!ref || !ref.startsWith('#/')) return null;
  return ref.slice(2).split('/').reduce((o, k) => (o != null ? o[k] : null), spec);
}

function firstLine(text, maxLen)
{
  if (!text) return '';
  const line = String(text).split('\n')[0].trim();
  return (!maxLen || line.length <= maxLen) ? line : line.slice(0, maxLen - 3) + '...';
}

function safeComment(text)
{
  return String(text || '').replace(/\*\//g, '* /').replace(/\r?\n/g, ' ');
}

// ---------------------------------------------------------------------------
// Schema -> TypeScript type string
// ---------------------------------------------------------------------------

function schemaToTs(spec, schema, depth)
{
  if (!schema) return 'unknown';
  if (depth === undefined) depth = 0;
  if (depth > 4) return 'unknown';

  if (schema.$ref)
  {
    const resolved = resolveRef(spec, schema.$ref);
    return resolved ? schemaToTs(spec, resolved, depth + 1) : 'unknown';
  }

  if (schema.oneOf || schema.anyOf)
  {
    const parts = (schema.oneOf || schema.anyOf)
      .map((s) => schemaToTs(spec, s, depth + 1));
    return [...new Set(parts)].join(' | ');
  }

  const types = Array.isArray(schema.type) ? schema.type : [schema.type].filter(Boolean);
  const nullable = types.includes('null');
  const mainType = types.filter((t) => t !== 'null')[0];
  const nullSuffix = nullable && mainType ? ' | null' : '';

  switch (mainType)
  {
    case 'integer':
    case 'number':
      return 'number' + nullSuffix;
    case 'boolean':
      return 'boolean' + nullSuffix;
    case 'string':
      return 'string' + nullSuffix;
    case 'array':
    {
      const item = schema.items ? schemaToTs(spec, schema.items, depth + 1) : 'unknown';
      return 'Array<' + item + '>' + nullSuffix;
    }
    case 'object':
    {
      if (depth >= 3 || !schema.properties) return 'Record<string, unknown>' + nullSuffix;
      const req = new Set(schema.required || []);
      const props = Object.entries(schema.properties).map(([k, v]) =>
      {
        const safeKey = /[^a-zA-Z0-9_$]/.test(k) ? "'" + k.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'" : k;
        return safeKey + (req.has(k) ? '' : '?') + ': ' + schemaToTs(spec, v, depth + 1);
      });
      return '{ ' + props.join('; ') + ' }' + nullSuffix;
    }
    default:
      if (!mainType && nullable) return 'null';
      return mainType || 'unknown';
  }
}

// ---------------------------------------------------------------------------
// Namespace tree
// ---------------------------------------------------------------------------

function buildTree(ops)
{
  const root = { segment: '', key: '', children: new Map(), methods: [] };

  for (const op of ops)
  {
    const segments = op.apiPath
      .replace(/^\//, '')
      .replace(/\.json$/i, '')
      .split('/');

    const methodSegment = segments[segments.length - 1];
    const namespacePath = segments.slice(0, -1);

    let node = root;
    for (const seg of namespacePath)
    {
      if (!node.children.has(seg))
      {
        node.children.set(seg, {
          segment: seg,
          key: seg.charAt(0).toLowerCase() + seg.slice(1),
          children: new Map(),
          methods: [],
        });
      }
      node = node.children.get(seg);
    }

    node.methods.push({
      ...op,
      methodName: methodSegment.charAt(0).toLowerCase() + methodSegment.slice(1),
    });
  }

  return root;
}

// ---------------------------------------------------------------------------
// Interface generation
// ---------------------------------------------------------------------------

function segmentsToName(segments)
{
  return segments.join('');
}

function generateParamsInterface(spec, name, allParams)
{
  if (allParams.length === 0)
  {
    return 'export type ' + name + ' = Record<string, unknown>;';
  }

  const lines = ['export interface ' + name + ' {'];
  const required = allParams.filter((p) => p.required);
  const optional = allParams.filter((p) => !p.required);

  for (const p of [...required, ...optional])
  {
    if (p.description)
    {
      lines.push('  /** ' + safeComment(firstLine(p.description, 100)) + ' */');
    }
    lines.push('  ' + p.name + (p.required ? '' : '?') + ': ' + schemaToTs(spec, p.schema) + ';');
  }

  lines.push('}');
  return lines.join('\n');
}

function generateResponseInterface(spec, name, schema)
{
  if (!schema || !schema.properties || Object.keys(schema.properties).length === 0)
  {
    return 'export type ' + name + ' = Record<string, unknown>;';
  }

  const lines = ['export interface ' + name + ' {'];

  for (const [propName, propSchema] of Object.entries(schema.properties))
  {
    let resolved = (propSchema && propSchema.$ref)
      ? (resolveRef(spec, propSchema.$ref) || propSchema)
      : propSchema;

    if (resolved && resolved.description)
    {
      lines.push('  /** ' + safeComment(firstLine(resolved.description, 100)) + ' */');
    }
    lines.push('  ' + propName + ': ' + schemaToTs(spec, resolved) + ';');
  }

  lines.push('}');
  return lines.join('\n');
}

function resolveResponseSchema(spec, operation)
{
  const r = operation.responses && (operation.responses['200'] || operation.responses[200]);
  if (!r) return null;
  const ref = r.$ref ? resolveRef(spec, r.$ref) : r;
  if (!ref) return null;
  const json = ref.content && ref.content['application/json'];
  if (!json || !json.schema) return null;
  const s = json.schema.$ref ? (resolveRef(spec, json.schema.$ref) || json.schema) : json.schema;
  return s || null;
}

// ---------------------------------------------------------------------------
// Class generation
// ---------------------------------------------------------------------------

function generateClasses(spec, node, pathSegments, interfaceMap)
{
  const result = [];

  for (const [, child] of node.children)
  {
    result.push(...generateClasses(spec, child, [...pathSegments, child.segment], interfaceMap));
  }

  if (pathSegments.length === 0) return result;

  const className = segmentsToName(pathSegments) + 'Namespace';
  const lines = [];

  lines.push('export class ' + className + ' {');

  for (const [, child] of node.children)
  {
    const childClass = segmentsToName([...pathSegments, child.segment]) + 'Namespace';
    lines.push('  readonly ' + child.key + ': ' + childClass + ';');
  }

  lines.push('');

  if (node.children.size > 0)
  {
    lines.push('  constructor(private readonly _client: WlClient) {');
    for (const [, child] of node.children)
    {
      const childClass = segmentsToName([...pathSegments, child.segment]) + 'Namespace';
      lines.push('    this.' + child.key + ' = new ' + childClass + '(this._client);');
    }
    lines.push('  }');
  }
  else
  {
    lines.push('  constructor(private readonly _client: WlClient) {}');
  }

  // Detect duplicate leaf names (same path, different HTTP method) for method name deduplication.
  const methodNameCount = {};
  for (const m of node.methods)
  {
    methodNameCount[m.methodName] = (methodNameCount[m.methodName] || 0) + 1;
  }

  for (const method of node.methods)
  {
    const key = method.apiPath + ':' + method.httpMethod;
    const iface = interfaceMap[key] || {};
    const paramsName = iface.paramsName || 'Record<string, unknown>';
    const responseName = iface.responseName || 'Record<string, unknown>';

    const effectiveName = (methodNameCount[method.methodName] > 1)
      ? method.methodName + method.httpMethod.charAt(0).toUpperCase() + method.httpMethod.slice(1)
      : method.methodName;

    lines.push('');
    if (method.operation.summary)
    {
      lines.push('  /** ' + safeComment(method.operation.summary) + ' */');
    }
    if (method.operation.deprecated)
    {
      lines.push('  /** @deprecated */');
    }
    lines.push(
      '  ' + effectiveName + '(params?: ' + paramsName + '): Promise<' + responseName + '> {'
    );
    lines.push(
      "    return this._client._request('" + method.apiPath + "', params, '" + method.httpMethod.toUpperCase() + "');"
    );
    lines.push('  }');
  }

  lines.push('}');
  result.push(lines.join('\n'));
  return result;
}

// ---------------------------------------------------------------------------
// Full TypeScript file assembly
// ---------------------------------------------------------------------------

const BASE_TYPES = `export interface WlClientOptions {
  /** JWT Bearer token for authentication. */
  token?: string;
  /** API server base URL. Default: 'https://staging.wellnessliving.com' (US). */
  baseUrl?: string;
  /** Request timeout in milliseconds. Default: 30000. */
  timeout?: number;
}

export interface WlApiErrorDetail {
  /** HTML-escaped error message. */
  html_message: string;
  /** Error code, or null if not applicable. */
  id: number | null;
  /** Field name associated with this error, if any. */
  s_field: string;
}

export class WlApiError extends Error {
  readonly status: number;
  readonly errors: WlApiErrorDetail[];

  constructor(status: number, body: unknown) {
    super('WlSdk: HTTP ' + status);
    this.name = 'WlApiError';
    this.status = status;
    const data = body as { a_error?: WlApiErrorDetail[] };
    this.errors = (data != null && data.a_error != null) ? data.a_error : [];
  }
}`;

function buildClientClass(topLevel)
{
  const lines = [
    '/** WellnessLiving API client. */',
    'export class WlClient {',
    '  private readonly _token: string | null;',
    '  private readonly _baseUrl: string;',
    '  private readonly _timeout: number;',
  ];

  for (const { key, className } of topLevel)
  {
    lines.push('  readonly ' + key + ': ' + className + ';');
  }

  lines.push('');
  lines.push('  constructor(options: WlClientOptions) {');
  lines.push("    if (options == null || typeof options !== 'object') {");
  lines.push("      throw new TypeError('WlSdk: options must be a plain object');");
  lines.push('    }');
  lines.push("    this._token = (options.token != null) ? options.token : null;");
  lines.push("    const base = (options.baseUrl != null) ? options.baseUrl : 'https://staging.wellnessliving.com';");
  lines.push("    this._baseUrl = (base.charAt(base.length - 1) === '/') ? base.slice(0, -1) : base;");
  lines.push("    this._timeout = (options.timeout != null && options.timeout > 0) ? options.timeout : 30000;");

  for (const { key, className } of topLevel)
  {
    lines.push('    this.' + key + ' = new ' + className + '(this);');
  }

  lines.push('  }');
  lines.push('');
  lines.push('  _request<T>(path: string, params: unknown, method: string): Promise<T> {');
  lines.push("    const httpMethod = method.toUpperCase();");
  lines.push("    let url = this._baseUrl + path;");
  lines.push("    const headers: Record<string, string> = {};");
  lines.push("    if (this._token != null) headers['Authorization'] = 'Bearer ' + this._token;");
  lines.push("    const p: Record<string, unknown> = ((params != null && typeof params === 'object') ? params : {}) as Record<string, unknown>;");
  lines.push('');
  lines.push("    const fetchOptions: RequestInit = { method: httpMethod, headers };");
  lines.push('');
  lines.push("    if (httpMethod === 'GET' || httpMethod === 'HEAD') {");
  lines.push("      const parts: string[] = [];");
  lines.push("      Object.entries(p).forEach(([k, v]) => {");
  lines.push("        if (Array.isArray(v)) {");
  lines.push("          v.forEach((item) => { if (item != null) parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(item))); });");
  lines.push("        } else if (v != null) {");
  lines.push("          parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(v)));");
  lines.push("        }");
  lines.push("      });");
  lines.push("      if (parts.length > 0) url += '?' + parts.join('&');");
  lines.push("    } else {");
  lines.push("      const form = new URLSearchParams();");
  lines.push("      Object.entries(p).forEach(([k, v]) => {");
  lines.push("        if (Array.isArray(v)) {");
  lines.push("          v.forEach((item) => { if (item != null) form.append(k, String(item)); });");
  lines.push("        } else if (v != null) {");
  lines.push("          form.append(k, String(v));");
  lines.push("        }");
  lines.push("      });");
  lines.push("      fetchOptions.body = form;");
  lines.push("    }");
  lines.push('');
  lines.push("    const controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;");
  lines.push("    let timerId: ReturnType<typeof setTimeout> | null = null;");
  lines.push("    if (controller != null) {");
  lines.push("      fetchOptions.signal = controller.signal;");
  lines.push("      timerId = setTimeout(() => { (controller as AbortController).abort(); }, this._timeout);");
  lines.push("    }");
  lines.push("    const cleanup = (): void => { if (timerId !== null) { clearTimeout(timerId); timerId = null; } };");
  lines.push('');
  lines.push("    return fetch(url, fetchOptions).then(");
  lines.push("      (response) => {");
  lines.push("        cleanup();");
  lines.push("        return response.json().then((data: unknown) => {");
  lines.push("          if (!response.ok) throw new WlApiError(response.status, data);");
  lines.push("          return data as T;");
  lines.push("        });");
  lines.push("      },");
  lines.push("      (err: unknown) => { cleanup(); throw err; }");
  lines.push("    );");
  lines.push('  }');
  lines.push('}');
  lines.push('');
  lines.push('export default WlClient;');

  return lines.join('\n');
}

function buildTs(spec, version)
{
  const specVersion = (spec.info && spec.info.version) ? String(spec.info.version) : 'unknown';
  const buildDate = new Date().toISOString().slice(0, 10);

  // Collect operations.
  const ops = [];
  for (const [apiPath, pathItem] of Object.entries(spec.paths || {}))
  {
    if (!pathItem || typeof pathItem !== 'object') continue;
    const pathLevelParams = Array.isArray(pathItem.parameters) ? pathItem.parameters : [];
    for (const [httpMethod, operation] of Object.entries(pathItem))
    {
      if (!HTTP_METHODS.has(httpMethod)) continue;
      if (!operation || typeof operation !== 'object' || Array.isArray(operation)) continue;
      ops.push({ apiPath, httpMethod, operation, pathLevelParams });
    }
  }

  // Pre-compute how many HTTP methods each path has (for interface name deduplication).
  const pathMethodCount = {};
  for (const op of ops)
  {
    pathMethodCount[op.apiPath] = (pathMethodCount[op.apiPath] || 0) + 1;
  }

  // Generate per-operation interfaces.
  const interfaceBlocks = [];
  const interfaceMap = {};

  for (const op of ops)
  {
    const segments = op.apiPath.replace(/^\//, '').replace(/\.json$/i, '').split('/');
    const namePrefix = segmentsToName(segments);
    const multiMethod = pathMethodCount[op.apiPath] > 1;
    const methodSuffix = multiMethod
      ? op.httpMethod.charAt(0).toUpperCase() + op.httpMethod.slice(1)
      : '';

    const allParams = [
      ...(Array.isArray(op.pathLevelParams) ? op.pathLevelParams : []),
      ...(Array.isArray(op.operation.parameters) ? op.operation.parameters : []),
    ]
      .map((p) => (p && p.$ref) ? (resolveRef(spec, p.$ref) || p) : p)
      .filter((p) => p && (p.in === 'query' || p.in === 'path'));

    const paramsName = namePrefix + methodSuffix + 'Params';
    const responseName = namePrefix + methodSuffix + 'Response';

    interfaceBlocks.push(generateParamsInterface(spec, paramsName, allParams));

    const responseSchema = resolveResponseSchema(spec, op.operation);
    interfaceBlocks.push(generateResponseInterface(spec, responseName, responseSchema));

    interfaceMap[op.apiPath + ':' + op.httpMethod] = { paramsName, responseName };
  }

  // Build namespace tree and generate classes.
  const tree = buildTree(ops);
  const classBlocks = generateClasses(spec, tree, [], interfaceMap);

  // Top-level namespace list for WlClient.
  const topLevel = [];
  for (const [, child] of tree.children)
  {
    topLevel.push({ key: child.key, className: child.segment + 'Namespace' });
  }

  const sections = [
    '// AUTO-GENERATED — DO NOT EDIT',
    '// WellnessLiving SDK — ' + version + ' channel',
    '// OpenAPI spec version: ' + specVersion,
    '// Build date: ' + buildDate,
    '// Endpoints: ' + ops.length,
    '',
    BASE_TYPES,
    '',
    '// --- Operation interfaces ---',
    '',
    interfaceBlocks.join('\n\n'),
    '',
    '// --- Namespace classes ---',
    '',
    classBlocks.join('\n\n'),
    '',
    '// --- Client ---',
    '',
    buildClientClass(topLevel),
  ];

  return sections.join('\n');
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main()
{
  const arg = process.argv[2];
  const versions = arg ? [arg] : ['stable', 'dev'];

  for (const version of versions)
  {
    if (!SPEC_URLS[version])
    {
      console.error('Unknown version: "' + version + '".');
      process.exit(1);
    }

    console.log('[' + version + '] Downloading spec...');
    const raw = await fetchText(SPEC_URLS[version]);
    console.log('[' + version + '] Downloaded ' + Math.round(raw.length / 1024) + ' KB');

    const spec = yaml.load(raw);
    const pathCount = Object.keys(spec.paths || {}).length;
    console.log('[' + version + '] Parsed: ' + pathCount + ' paths');

    console.log('[' + version + '] Generating TypeScript...');
    const ts = buildTs(spec, version);

    const outDir = path.resolve(__dirname, '..', 'src', version);
    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, 'index.ts');
    fs.writeFileSync(outFile, ts, 'utf8');

    const kb = Math.round(fs.statSync(outFile).size / 1024);
    console.log('[' + version + '] Written: ' + outFile + ' (' + kb + ' KB)');
  }

  console.log('Done.');
}

main().catch((err) => { console.error('Fatal:', err.message || err); process.exit(1); });
