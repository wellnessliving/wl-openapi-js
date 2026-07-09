'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const OPENAPI_REPO = 'https://github.com/wellnessliving/openapi.git';
const CLONE_DIR = '/tmp/openapi-spec';
const CHANNELS = ['stable', 'dev', 'production'];

const HTTP_METHODS = new Set(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']);

/**
 * HTTP verb priority order used to pick a stable "first available" method when a markdown
 * link to an API path omits the verb and the path has more than one HTTP method.
 */
const HTTP_VERB_PRIORITY = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'];

/**
 * Clones the OpenAPI spec repository if not already present.
 */
function ensureSpec()
{
  if (!fs.existsSync(path.join(CLONE_DIR, 'stable', 'openapi.yaml')))
  {
    console.log('Cloning OpenAPI spec repository...');
    execSync('git clone --depth=1 ' + OPENAPI_REPO + ' ' + CLONE_DIR, { stdio: 'inherit' });
  }
}

function resolveRef(spec, ref)
{
  if (!ref || !ref.startsWith('#/')) return null;
  return ref.slice(2).split('/').reduce((o, k) => (o != null ? o[k] : null), spec);
}

/**
 * Maps OpenAPI schema names to their generated TypeScript enum names.
 * Populated in buildTs() before any code generation runs.
 *
 * @type {Map<string, string>}
 */
let _enumTsNames = new Map();

/**
 * Maps each API path to the generated TS namespace class, method name, and HTTP method used
 * to reach it, so convertYamlLinks can resolve bare markdown links to an API path. Populated
 * in buildTs() before any doc comment is generated.
 *
 * When a path has more than one HTTP method, the one with the highest
 * {@link HTTP_VERB_PRIORITY} is used, since a markdown link to a bare API path does not
 * specify which HTTP method it refers to.
 *
 * @type {Map<string, {className: string, methodName: string, httpMethod: string}>}
 */
let _pathMethodInfo = new Map();

/**
 * Maps 'apiPath:httpMethod' to its operation object, populated in buildTs() alongside
 * {@link _pathMethodInfo} so property links can inspect the resolved operation's schema.
 *
 * @type {Map<string, {apiPath: string, httpMethod: string, operation: Object, pathLevelParams: Object[]}>}
 */
let _opsByKey = new Map();

/**
 * Maps 'apiPath:httpMethod' to its generated interface names, set to the same object built
 * in buildTs() so property links can reference the response interface.
 *
 * @type {Object<string, {paramsName: string, responseName: string}>}
 */
let _interfaceMapRef = null;

/**
 * OpenAPI spec of the current build, set in buildTs() so property links can resolve the
 * response schema of the target operation.
 *
 * @type {Object|null}
 */
let _currentSpec = null;

/**
 * Computes the effective (deduplicated) method name for every operation directly on a
 * namespace tree node, matching the suffixing rule applied in generateClasses().
 *
 * @param {{methods: {apiPath: string, httpMethod: string, methodName: string}[]}} node
 * @returns {Map<string, string>} Effective method name keyed by 'apiPath:httpMethod'.
 */
function computeNodeMethodNames(node)
{
  const methodNameCount = {};
  for (const m of node.methods)
  {
    methodNameCount[m.methodName] = (methodNameCount[m.methodName] || 0) + 1;
  }

  const result = new Map();
  for (const m of node.methods)
  {
    const effectiveName = (methodNameCount[m.methodName] > 1)
      ? m.methodName + m.httpMethod.charAt(0).toUpperCase() + m.httpMethod.slice(1)
      : m.methodName;
    result.set(m.apiPath + ':' + m.httpMethod, effectiveName);
  }
  return result;
}

/**
 * Walks the namespace tree to populate {@link _pathMethodInfo}, without emitting any code.
 * Must run before any doc comment is generated, so convertYamlLinks can cross-reference
 * paths regardless of where they appear in the spec.
 *
 * @param {Object} node Namespace tree node (see buildTree()).
 * @param {string[]} pathSegments Namespace path segments leading to this node.
 */
function populateMethodInfo(node, pathSegments)
{
  for (const [, child] of node.children)
  {
    populateMethodInfo(child, [...pathSegments, child.segment]);
  }

  if (pathSegments.length === 0) return;

  const className = segmentsToName(pathSegments) + 'Namespace';
  const nodeMethodNames = computeNodeMethodNames(node);

  const byPath = new Map();
  for (const m of node.methods)
  {
    if (!byPath.has(m.apiPath)) byPath.set(m.apiPath, []);
    byPath.get(m.apiPath).push({
      httpMethod: m.httpMethod,
      methodName: nodeMethodNames.get(m.apiPath + ':' + m.httpMethod),
    });
  }

  for (const [apiPath, list] of byPath)
  {
    list.sort((a, b) => HTTP_VERB_PRIORITY.indexOf(a.httpMethod) - HTTP_VERB_PRIORITY.indexOf(b.httpMethod));
    _pathMethodInfo.set(apiPath, { className, methodName: list[0].methodName, httpMethod: list[0].httpMethod });
  }
}

/**
 * Resolves a markdown API-path link to a TSDoc `{@link}` target.
 *
 * A bare label resolves to the namespace class method. A label ending with `::$prop`
 * additionally resolves to the response interface property when that property exists on the
 * resolved operation's response schema; otherwise it falls back to the method link.
 *
 * @param {string} label Markdown link label, e.g. 'ImageUploadApi' or 'ImageUploadApi::$k_id'.
 * @param {string} apiPath API path, e.g. '/Core/Drive/ImageUpload/ImageUpload.json'.
 * @returns {string|null} `{@link}` target text, or `null` if the path has no generated method.
 */
function resolveApiPathLink(label, apiPath)
{
  const info = _pathMethodInfo.get(apiPath);
  if (!info) return null;

  const propMatch = label.match(/::\$(\w+)$/);
  if (propMatch)
  {
    const opKey = apiPath + ':' + info.httpMethod;
    const op = _opsByKey.get(opKey);
    const iface = _interfaceMapRef ? _interfaceMapRef[opKey] : null;
    const responseSchema = op ? resolveResponseSchema(_currentSpec, op.operation) : null;
    if (
      iface && responseSchema && responseSchema.properties &&
      Object.prototype.hasOwnProperty.call(responseSchema.properties, propMatch[1])
    )
    {
      return iface.responseName + '.' + propMatch[1];
    }
  }

  return info.className + '#' + info.methodName;
}

/**
 * Converts OpenAPI markdown links to `{@link TsName}` for enums or the resolved namespace
 * class method (or response property) for API paths, or strips them to plain text otherwise.
 *
 * @param {string} text
 * @returns {string}
 */
function convertYamlLinks(text)
{
  let result = String(text || '').replace(
    /\[([^\]]+)\]\(#\/components\/schemas\/([^)]+)\)/g,
    function(match, linkText, schemaKey)
    {
      const tsName = _enumTsNames.get(schemaKey);
      return tsName ? '{@link ' + tsName + '}' : linkText;
    }
  );

  result = result.replace(
    /\[([^\]]+)\]\((\/[^)]+\.json)\)/g,
    function(match, linkText, apiPath)
    {
      const target = resolveApiPathLink(linkText, apiPath);
      return target ? '{@link ' + target + '}' : linkText;
    }
  );

  return result;
}

/**
 * Returns the TypeScript enum name for a schema `$ref` string if it points to a generated enum,
 * or `null` otherwise.
 *
 * @param {string} ref
 * @returns {string|null}
 */
function getEnumTsName(ref)
{
  if (!ref || !ref.startsWith('#/components/schemas/')) return null;
  return _enumTsNames.get(ref.replace('#/components/schemas/', '')) || null;
}

/**
 * Builds a single-line JSDoc comment for a property.
 * Appends `@see TsName` when the property references an enum not already mentioned in the description.
 *
 * @param {string} desc Already-safe first-line description (may be empty).
 * @param {string|null} enumTsName TypeScript enum name, or `null` if not applicable.
 * @returns {string} Complete single-line JSDoc comment, or empty string if nothing to say.
 */
function buildPropComment(desc, enumTsName)
{
  const mentionsEnum = enumTsName && desc.includes(enumTsName);
  const seeTag = (enumTsName && !mentionsEnum) ? ' @see ' + enumTsName : '';

  if (!desc && !seeTag) return '';
  return '/** ' + (desc || '') + seeTag + ' */';
}

function firstLine(text, maxLen)
{
  if (!text) return '';
  const line = convertYamlLinks(String(text)).split('\n')[0].trim();
  return (!maxLen || line.length <= maxLen) ? line : line.slice(0, maxLen - 3) + '...';
}

function safeComment(text)
{
  return convertYamlLinks(String(text || '')).replace(/\*\//g, '* /').replace(/\r?\n/g, ' ');
}

/**
 * Parses named enum constants from an OpenAPI schema description.
 *
 * Expected format: `- 4 (`CONSTANT_NAME`): Description text.`
 *
 * @param {string} description
 * @returns {{value: number, name: string, description: string}[]}
 */
function parseEnumConstants(description)
{
  const result = [];
  const re = /^- (-?\d+) \(`([A-Z][A-Z0-9_]*)`\): (.+)/gm;
  let m;

  while ((m = re.exec(description)) !== null)
  {
    result.push({
      value: parseInt(m[1], 10),
      name: m[2],
      description: m[3].split('\n')[0].trim().replace(/\.$/, ''),
    });
  }

  return result;
}

/**
 * Converts an OpenAPI schema name (e.g., `Core.Locale.LocaleSid`) to a TypeScript identifier.
 *
 * @param {string} name
 * @returns {string}
 */
function schemaNameToTsName(name)
{
  return name.replace(/\./g, '');
}

/**
 * Generates TypeScript enum declarations for all enum schemas in the spec.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @returns {string}
 */
function generateTsEnumSection(spec)
{
  const schemas = (spec.components && spec.components.schemas) || {};
  const blocks = [];

  for (const [schemaName, schema] of Object.entries(schemas))
  {
    if (!schema || !Array.isArray(schema.enum))
    {
      continue;
    }

    const constants = parseEnumConstants(schema.description || '');
    if (constants.length === 0)
    {
      continue;
    }

    const tsName = schemaNameToTsName(schemaName);
    const firstDescLine = schema.description ? schema.description.split('\n')[0].trim() : '';
    const lines = [];

    if (firstDescLine)
    {
      lines.push('/** ' + safeComment(firstDescLine) + ' */');
    }

    lines.push('export enum ' + tsName + ' {');

    for (const c of constants)
    {
      if (c.description)
      {
        lines.push('  /** ' + safeComment(c.description) + ' */');
      }
      lines.push('  ' + c.name + ' = ' + c.value + ',');
    }

    lines.push('}');
    blocks.push(lines.join('\n'));
  }

  return blocks.join('\n\n');
}

// ---------------------------------------------------------------------------
// Schema -> TypeScript type string
// ---------------------------------------------------------------------------

function schemaToTs(spec, schema, depth, indent)
{
  if (!schema) return 'unknown';
  if (depth === undefined) depth = 0;
  if (indent === undefined) indent = 1;
  if (depth > 4) return 'unknown';

  if (schema.$ref)
  {
    const refName = schema.$ref.replace('#/components/schemas/', '');
    const refSchema = spec.components && spec.components.schemas && spec.components.schemas[refName];

    if (refSchema && Array.isArray(refSchema.enum) && parseEnumConstants(refSchema.description || '').length > 0)
    {
      const types = Array.isArray(refSchema.type) ? refSchema.type : [refSchema.type];
      const nullable = types.includes('null');
      const tsName = schemaNameToTsName(refName);
      return nullable ? tsName + ' | null' : tsName;
    }

    const resolved = resolveRef(spec, schema.$ref);
    return resolved ? schemaToTs(spec, resolved, depth + 1, indent) : 'unknown';
  }

  if (schema.oneOf || schema.anyOf)
  {
    const parts = (schema.oneOf || schema.anyOf)
      .map((s) => schemaToTs(spec, s, depth + 1, indent));
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
      const item = schema.items ? schemaToTs(spec, schema.items, depth + 1, indent) : 'unknown';
      return 'Array<' + item + '>' + nullSuffix;
    }
    case 'object':
    {
      if (depth >= 3 || !schema.properties) return 'Record<string, unknown>' + nullSuffix;
      const req = new Set(schema.required || []);
      const entries = Object.entries(schema.properties);

      // Use multi-line format with JSDoc when any property has a description or enum ref.
      const hasDescriptions = entries.some(([, v]) =>
      {
        const r = (v && v.$ref) ? (resolveRef(spec, v.$ref) || v) : v;
        return (r && r.description) || (v && v.$ref && getEnumTsName(v.$ref));
      });

      if (!hasDescriptions)
      {
        const props = entries.map(([k, v]) =>
        {
          const safeKey = /[^a-zA-Z0-9_$]/.test(k) ? "'" + k.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'" : k;
          return safeKey + (req.has(k) ? '' : '?') + ': ' + schemaToTs(spec, v, depth + 1, indent + 1);
        });
        return '{ ' + props.join('; ') + ' }' + nullSuffix;
      }

      const pad = '  '.repeat(indent);
      const propPad = '  '.repeat(indent + 1);
      const propLines = [];
      for (const [k, v] of entries)
      {
        const r = (v && v.$ref) ? (resolveRef(spec, v.$ref) || v) : v;
        const enumTsName = (v && v.$ref) ? getEnumTsName(v.$ref) : null;
        const desc = r && r.description ? safeComment(firstLine(r.description, 100)) : '';
        const comment = buildPropComment(desc, enumTsName);
        if (comment) propLines.push(propPad + comment);
        const safeKey = /[^a-zA-Z0-9_$]/.test(k) ? "'" + k.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'" : k;
        propLines.push(propPad + safeKey + (req.has(k) ? '' : '?') + ': ' + schemaToTs(spec, v, depth + 1, indent + 1) + ';');
      }
      return '{\n' + propLines.join('\n') + '\n' + pad + '}' + nullSuffix;
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
        const pascalSeg = toIdentifierSegment(seg);
        node.children.set(seg, {
          segment: pascalSeg,
          key: pascalSeg.charAt(0).toLowerCase() + pascalSeg.slice(1),
          children: new Map(),
          methods: [],
        });
      }
      node = node.children.get(seg);
    }

    const pascalMethod = toIdentifierSegment(methodSegment);
    node.methods.push({
      ...op,
      methodName: pascalMethod.charAt(0).toLowerCase() + pascalMethod.slice(1),
    });
  }

  return root;
}

// ---------------------------------------------------------------------------
// Interface generation
// ---------------------------------------------------------------------------

/**
 * Converts a single raw API path segment into a `PascalCase` identifier fragment, splitting on
 * `-`/`_` delimiters. Segments that are already a single `PascalCase` word (the codebase
 * convention) pass through unchanged.
 *
 * @param {string} segment Raw path segment (e.g. `door-access`, `PayProcessor`).
 * @returns {string}
 */
function toIdentifierSegment(segment)
{
  return segment
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function segmentsToName(segments)
{
  return segments.map(toIdentifierSegment).join('');
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
    const enumTsName = (p.schema && p.schema.$ref) ? getEnumTsName(p.schema.$ref) : null;
    const desc = p.description ? safeComment(firstLine(p.description, 100)) : '';
    const comment = buildPropComment(desc, enumTsName);
    if (comment) lines.push('  ' + comment);
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
    const originalRef = propSchema && propSchema.$ref;
    const resolved = originalRef ? (resolveRef(spec, originalRef) || propSchema) : propSchema;
    const enumTsName = originalRef ? getEnumTsName(originalRef) : null;
    const desc = resolved && resolved.description ? safeComment(firstLine(resolved.description, 100)) : '';
    const comment = buildPropComment(desc, enumTsName);
    if (comment) lines.push('  ' + comment);
    lines.push('  ' + propName + ': ' + schemaToTs(spec, propSchema) + ';');
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

  const nodeMethodNames = computeNodeMethodNames(node);

  for (const method of node.methods)
  {
    const key = method.apiPath + ':' + method.httpMethod;
    const iface = interfaceMap[key] || {};
    const paramsName = iface.paramsName || 'Record<string, unknown>';
    const responseName = iface.responseName || 'Record<string, unknown>';

    const effectiveName = nodeMethodNames.get(key);

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

  _currentSpec = spec;

  // Populate the enum names map first so convertYamlLinks and getEnumTsName work during generation.
  _enumTsNames.clear();
  for (const [schemaName, schema] of Object.entries((spec.components && spec.components.schemas) || {}))
  {
    if (schema && Array.isArray(schema.enum) && parseEnumConstants(schema.description || '').length > 0)
    {
      _enumTsNames.set(schemaName, schemaNameToTsName(schemaName));
    }
  }

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

  // Resolve interface names and the namespace tree/method names for every operation before
  // generating any doc comment, so convertYamlLinks can cross-reference them regardless of
  // where the target path appears in the spec.
  const interfaceMap = {};
  _opsByKey.clear();
  for (const op of ops)
  {
    const segments = op.apiPath.replace(/^\//, '').replace(/\.json$/i, '').split('/');
    const namePrefix = segmentsToName(segments);
    const methodSuffix = (pathMethodCount[op.apiPath] > 1)
      ? op.httpMethod.charAt(0).toUpperCase() + op.httpMethod.slice(1)
      : '';

    interfaceMap[op.apiPath + ':' + op.httpMethod] = {
      paramsName: namePrefix + methodSuffix + 'Params',
      responseName: namePrefix + methodSuffix + 'Response',
    };
    _opsByKey.set(op.apiPath + ':' + op.httpMethod, op);
  }
  _interfaceMapRef = interfaceMap;

  const tree = buildTree(ops);
  _pathMethodInfo.clear();
  populateMethodInfo(tree, []);

  // Generate per-operation interfaces (descriptions may link to any other path/property).
  const interfaceBlocks = [];
  for (const op of ops)
  {
    const { paramsName, responseName } = interfaceMap[op.apiPath + ':' + op.httpMethod];

    const allParams = [
      ...(Array.isArray(op.pathLevelParams) ? op.pathLevelParams : []),
      ...(Array.isArray(op.operation.parameters) ? op.operation.parameters : []),
    ]
      .map((p) => (p && p.$ref) ? (resolveRef(spec, p.$ref) || p) : p)
      .filter((p) => p && (p.in === 'query' || p.in === 'path'));

    interfaceBlocks.push(generateParamsInterface(spec, paramsName, allParams));

    const responseSchema = resolveResponseSchema(spec, op.operation);
    interfaceBlocks.push(generateResponseInterface(spec, responseName, responseSchema));
  }

  // Generate classes (summaries may also link to any other path/property).
  const classBlocks = generateClasses(spec, tree, [], interfaceMap);

  // Top-level namespace list for WlClient.
  const topLevel = [];
  for (const [, child] of tree.children)
  {
    topLevel.push({ key: child.key, className: child.segment + 'Namespace' });
  }

  const enumsCode = generateTsEnumSection(spec);
  const enumCount = enumsCode ? enumsCode.split('\nexport enum ').length : 0;

  const sections = [
    '// AUTO-GENERATED — DO NOT EDIT',
    '// WellnessLiving SDK — ' + version + ' channel',
    '// OpenAPI spec version: ' + specVersion,
    '// Build date: ' + buildDate,
    '// Endpoints: ' + ops.length,
    '// Enums: ' + enumCount,
    '',
    BASE_TYPES,
    '',
    '// --- Enum types (' + enumCount + ' total) ---',
    '',
    enumsCode,
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

function main()
{
  const arg = process.argv[2];
  const versions = arg ? [arg] : CHANNELS;

  for (const version of versions)
  {
    if (!CHANNELS.includes(version))
    {
      console.error('Unknown version: "' + version + '". Use "stable", "dev", or "production".');
      process.exit(1);
    }

    ensureSpec();

    const specFile = path.join(CLONE_DIR, version, 'openapi.yaml');
    if (!fs.existsSync(specFile))
    {
      console.log('[' + version + '] Spec not available - skipping.');
      continue;
    }

    console.log('[' + version + '] Reading spec...');
    const raw = fs.readFileSync(specFile, 'utf8');
    console.log('[' + version + '] Read ' + Math.round(raw.length / 1024) + ' KB');

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

main();
