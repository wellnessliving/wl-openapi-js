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

/**
 * Downloads text content from a URL, following up to 5 redirects.
 *
 * @param {string} url
 * @param {number} [redirectsLeft]
 * @returns {Promise<string>}
 */
function fetchText(url, redirectsLeft)
{
  if (redirectsLeft === undefined)
  {
    redirectsLeft = 5;
  }

  return new Promise((resolve, reject) =>
  {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 120000 }, (res) =>
    {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
      {
        if (redirectsLeft <= 0)
        {
          reject(new Error('Too many redirects for ' + url));
          return;
        }
        fetchText(res.headers.location, redirectsLeft - 1).then(resolve, reject);
        return;
      }

      if (res.statusCode !== 200)
      {
        reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      res.on('error', reject);
    });

    req.on('error', reject);
    req.on('timeout', () =>
    {
      req.destroy();
      reject(new Error('Request timed out: ' + url));
    });
  });
}

/**
 * Resolves a JSON Reference (`$ref`) within the spec object.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @param {string} ref Reference string (e.g., '#/components/parameters/X-Error-Rules').
 * @returns {Object|null}
 */
function resolveRef(spec, ref)
{
  if (!ref || !ref.startsWith('#/'))
  {
    return null;
  }

  return ref.slice(2).split('/').reduce((obj, key) =>
  {
    return (obj != null && typeof obj === 'object') ? obj[key] : null;
  }, spec);
}

/**
 * Converts an OpenAPI schema to a JSDoc type string.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @param {Object} schema OpenAPI schema object.
 * @param {number} [depth] Current recursion depth (stops at 3).
 * @returns {string}
 */
function schemaToJsType(spec, schema, depth)
{
  if (!schema)
  {
    return '*';
  }

  if (depth === undefined)
  {
    depth = 0;
  }

  if (depth > 3)
  {
    return '*';
  }

  if (schema.$ref)
  {
    const resolved = resolveRef(spec, schema.$ref);
    if (resolved)
    {
      return schemaToJsType(spec, resolved, depth + 1);
    }
    return schema.$ref.split('/').pop();
  }

  if (schema.oneOf || schema.anyOf)
  {
    const variants = (schema.oneOf || schema.anyOf);
    return variants.slice(0, 4).map((s) => schemaToJsType(spec, s, depth + 1)).join('|');
  }

  const type = Array.isArray(schema.type)
    ? schema.type.filter((t) => t !== 'null').join('|')
    : schema.type;

  const nullable = Array.isArray(schema.type) && schema.type.includes('null');
  const prefix = nullable ? '?' : '';

  switch (type)
  {
    case 'integer':
    case 'number':
      return prefix + 'number';
    case 'boolean':
      return prefix + 'boolean';
    case 'array':
    {
      const items = schema.items ? schemaToJsType(spec, schema.items, depth + 1) : '*';
      return prefix + items + '[]';
    }
    case 'object':
      return prefix + 'Object';
    case 'string':
      return prefix + 'string';
    default:
      return type ? (prefix + type) : '*';
  }
}

/**
 * Converts an API path to a camelCase method name.
 *
 * Example: '/Thoth/ExplorerSearch/ClassSession/ClassSessionSearch.json'
 * becomes: 'thothExplorerSearchClassSessionClassSessionSearch'
 *
 * @param {string} apiPath
 * @returns {string}
 */
function pathToMethodName(apiPath)
{
  return apiPath
    .replace(/^\//, '')
    .replace(/\.json$/i, '')
    .split('/')
    .map((seg, i) =>
    {
      const clean = seg.replace(/[^a-zA-Z0-9]/g, '');
      return i === 0
        ? clean.charAt(0).toLowerCase() + clean.slice(1)
        : clean;
    })
    .join('');
}

/**
 * Makes description text safe for embedding inside a `/ * * /` JSDoc block.
 * Also decodes common HTML entities that appear in spec descriptions.
 *
 * @param {string} text
 * @returns {string}
 */
function escDoc(text)
{
  if (!text)
  {
    return '';
  }

  return String(text)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/\*\//g, '* /')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
}

/**
 * Returns the first line of text, truncated to maxLen characters.
 *
 * @param {string} text
 * @param {number} [maxLen]
 * @returns {string}
 */
function firstLine(text, maxLen)
{
  if (!text)
  {
    return '';
  }

  const line = String(text).split('\n')[0].trim();
  if (!maxLen || line.length <= maxLen)
  {
    return line;
  }

  return line.slice(0, maxLen - 3) + '...';
}

/**
 * Extracts top-level properties from the 200 response schema of an operation.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @param {Object} operation OpenAPI operation object.
 * @returns {{name: string, type: string, description: string}[]}
 */
function getResponseProperties(spec, operation)
{
  const response = operation.responses && (operation.responses['200'] || operation.responses[200]);
  if (!response)
  {
    return [];
  }

  const ref = response.$ref ? resolveRef(spec, response.$ref) : response;
  if (!ref)
  {
    return [];
  }

  const content = ref.content;
  if (!content)
  {
    return [];
  }

  const jsonContent = content['application/json'];
  if (!jsonContent || !jsonContent.schema)
  {
    return [];
  }

  let schema = jsonContent.schema;
  if (schema.$ref)
  {
    schema = resolveRef(spec, schema.$ref) || schema;
  }

  const properties = schema.properties;
  if (!properties || typeof properties !== 'object')
  {
    return [];
  }

  const result = [];
  const MAX_PROPS = 20;

  for (const [name, propSchema] of Object.entries(properties))
  {
    if (result.length >= MAX_PROPS)
    {
      result.push({ name: '...', type: '*', description: '' });
      break;
    }

    let resolved = propSchema;
    if (propSchema.$ref)
    {
      resolved = resolveRef(spec, propSchema.$ref) || propSchema;
    }

    result.push({
      name: name,
      type: schemaToJsType(spec, resolved),
      description: resolved.description || '',
    });
  }

  return result;
}

/**
 * Generates a JSDoc block comment for an API operation.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @param {Object} operation OpenAPI operation object.
 * @param {Array} pathLevelParams Parameters from the path item (inherited by all operations).
 * @returns {string} JSDoc block without outer indentation.
 */
function buildJsDoc(spec, operation, pathLevelParams)
{
  const lines = ['/**'];

  if (operation.summary)
  {
    lines.push(' * ' + escDoc(operation.summary));
  }

  if (operation.description && operation.description !== operation.summary)
  {
    const desc = escDoc(operation.description.trim());
    const descLines = desc.split('\n');

    lines.push(' *');
    for (const descLine of descLines.slice(0, 6))
    {
      lines.push(' * ' + descLine);
    }

    if (descLines.length > 6)
    {
      lines.push(' * ...');
    }
  }

  if (operation.deprecated)
  {
    const note = operation['x-deprecated'];
    const msg = note ? firstLine(String(note), 120) : 'This endpoint is deprecated.';
    lines.push(' * @deprecated ' + escDoc(msg));
  }

  lines.push(' *');

  const allParams = [
    ...(Array.isArray(pathLevelParams) ? pathLevelParams : []),
    ...(Array.isArray(operation.parameters) ? operation.parameters : []),
  ]
    .map((p) => (p && p.$ref) ? (resolveRef(spec, p.$ref) || p) : p)
    .filter((p) => p && (p.in === 'query' || p.in === 'path'));

  if (allParams.length > 0)
  {
    lines.push(' * @param {Object} [params] Request parameters.');

    for (const p of allParams)
    {
      const type = schemaToJsType(spec, p.schema);
      const namePath = p.required ? 'params.' + p.name : '[params.' + p.name + ']';
      const desc = p.description ? ' ' + escDoc(firstLine(p.description, 100)) : '';
      lines.push(' * @param {' + type + '} ' + namePath + desc);
    }
  }
  else if (operation.requestBody)
  {
    lines.push(' * @param {Object} [params] Request body fields.');
  }
  else
  {
    lines.push(' * @param {Object} [params] Request parameters.');
  }

  const responseProps = getResponseProperties(spec, operation);

  if (responseProps.length > 0)
  {
    lines.push(' * @returns {Promise<Object>} Response data.');
    for (const prop of responseProps)
    {
      const desc = prop.description ? ' ' + escDoc(firstLine(prop.description, 80)) : '';
      lines.push(' *  `' + prop.name + '` {' + prop.type + '}' + desc);
    }
  }
  else
  {
    lines.push(' * @returns {Promise<Object>} Response data.');
  }

  lines.push(' */');

  return lines.join('\n');
}

/**
 * Generates the source code for one SDK method.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @param {string} apiPath URL path (e.g., '/Core/Request/Example.json').
 * @param {string} httpMethod Lowercase HTTP method ('get', 'post', etc.).
 * @param {Object} operation OpenAPI operation object.
 * @param {Array} pathLevelParams Parameters from the path item.
 * @param {string} methodName JavaScript method name to assign.
 * @returns {string}
 */
function buildMethod(spec, apiPath, httpMethod, operation, pathLevelParams, methodName)
{
  const indent = '  ';
  const jsdoc = buildJsDoc(spec, operation, pathLevelParams)
    .split('\n')
    .map((line) => indent + line)
    .join('\n');

  const httpMethodUpper = httpMethod.toUpperCase();

  return (
    jsdoc + '\n' +
    indent + 'WlClient.prototype.' + methodName + ' = function(params)\n' +
    indent + '{\n' +
    indent + "  return this.request('" + apiPath + "', params || {}, '" + httpMethodUpper + "');\n" +
    indent + '};\n'
  );
}

/**
 * Generates the full SDK source code from a parsed OpenAPI spec.
 *
 * @param {Object} spec Parsed OpenAPI spec.
 * @param {string} version 'stable' or 'dev'.
 * @param {string} templateSrc Contents of sdk-template.js.
 * @returns {string}
 */
function buildSdk(spec, version, templateSrc)
{
  const specVersion = (spec.info && spec.info.version) ? String(spec.info.version) : 'unknown';
  const buildDate = new Date().toISOString().slice(0, 10);

  // Collect all operations.
  const ops = [];
  for (const [apiPath, pathItem] of Object.entries(spec.paths || {}))
  {
    if (!pathItem || typeof pathItem !== 'object')
    {
      continue;
    }

    const pathLevelParams = Array.isArray(pathItem.parameters) ? pathItem.parameters : [];

    for (const [httpMethod, operation] of Object.entries(pathItem))
    {
      if (!HTTP_METHODS.has(httpMethod))
      {
        continue;
      }

      if (!operation || typeof operation !== 'object' || Array.isArray(operation))
      {
        continue;
      }

      ops.push({ apiPath, httpMethod, operation, pathLevelParams });
    }
  }

  // Assign method names, detecting collisions and resolving them with HTTP method suffix.
  const baseNameCount = {};
  for (const op of ops)
  {
    const base = pathToMethodName(op.apiPath);
    baseNameCount[base] = (baseNameCount[base] || 0) + 1;
  }

  const usedNames = new Set();
  const methods = [];

  for (const op of ops)
  {
    const base = pathToMethodName(op.apiPath);
    let name = (baseNameCount[base] > 1)
      ? base + op.httpMethod.charAt(0).toUpperCase() + op.httpMethod.slice(1)
      : base;

    // Last-resort deduplication (should never be needed in practice).
    if (usedNames.has(name))
    {
      name = name + '_' + op.httpMethod;
    }

    usedNames.add(name);
    methods.push(buildMethod(spec, op.apiPath, op.httpMethod, op.operation, op.pathLevelParams, name));
  }

  const methodCount = methods.length;
  const methodsCode = methods.join('\n');

  return templateSrc
    .replace(/\{\{VERSION\}\}/g, version)
    .replace(/\{\{SPEC_VERSION\}\}/g, specVersion)
    .replace(/\{\{BUILD_DATE\}\}/g, buildDate)
    .replace(/\{\{METHOD_COUNT\}\}/g, String(methodCount))
    .replace('// {{GENERATED_METHODS}}', methodsCode.replace(/\n+$/, ''));
}

async function main()
{
  const arg = process.argv[2];
  const versions = arg ? [arg] : ['stable', 'dev'];

  for (const version of versions)
  {
    if (!SPEC_URLS[version])
    {
      console.error('Unknown version: "' + version + '". Use "stable" or "dev".');
      process.exit(1);
    }

    console.log('[' + version + '] Downloading spec from ' + SPEC_URLS[version]);
    const raw = await fetchText(SPEC_URLS[version]);
    console.log('[' + version + '] Downloaded ' + Math.round(raw.length / 1024) + ' KB');

    console.log('[' + version + '] Parsing YAML...');
    const spec = yaml.load(raw);
    const pathCount = Object.keys(spec.paths || {}).length;
    console.log('[' + version + '] Parsed: ' + pathCount + ' API paths');

    const templatePath = path.resolve(__dirname, 'sdk-template.js');
    const templateSrc = fs.readFileSync(templatePath, 'utf8');

    console.log('[' + version + '] Generating SDK...');
    const sdk = buildSdk(spec, version, templateSrc);

    const outDir = path.resolve(__dirname, '..', version);
    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, 'wl-sdk.js');
    fs.writeFileSync(outFile, sdk, 'utf8');

    const kb = Math.round(fs.statSync(outFile).size / 1024);
    console.log('[' + version + '] Written: ' + outFile + ' (' + kb + ' KB)');
  }

  console.log('Done.');
}

main().catch((err) =>
{
  console.error('Fatal:', err.message || err);
  process.exit(1);
});
