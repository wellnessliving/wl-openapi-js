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
 * Maps OpenAPI schema names to their generated JS enum names.
 * Populated in buildSdk() before any code generation runs.
 *
 * @type {Map<string, string>}
 */
let _enumJsNames = new Map();

/**
 * Converts OpenAPI markdown links to `{@link WlClient.JsName}` when the target is a generated
 * enum, or strips them to plain text otherwise.
 *
 * @param {string} text
 * @returns {string}
 */
function convertYamlLinks(text)
{
  return String(text || '').replace(
    /\[([^\]]+)\]\(#\/components\/schemas\/([^)]+)\)/g,
    function(match, linkText, schemaKey)
    {
      const jsName = _enumJsNames.get(schemaKey);
      return jsName ? '{@link WlClient.' + jsName + '}' : linkText;
    }
  );
}

/**
 * Returns the JS enum name for a schema `$ref` string if it points to a generated enum,
 * or `null` otherwise.
 *
 * @param {string} ref
 * @returns {string|null}
 */
function getEnumJsName(ref)
{
  if (!ref || !ref.startsWith('#/components/schemas/')) return null;
  return _enumJsNames.get(ref.replace('#/components/schemas/', '')) || null;
}

/**
 * Makes description text safe for embedding inside a `/ * * /` JSDoc block.
 * Also decodes common HTML entities and converts OpenAPI schema links.
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

  return convertYamlLinks(String(text))
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
 * Converts an OpenAPI schema name (e.g., `Core.Locale.LocaleSid`) to a JS identifier.
 *
 * @param {string} name
 * @returns {string}
 */
function schemaNameToJsName(name)
{
  return name.replace(/\./g, '');
}

/**
 * Generates JS enum constant objects (as `WlClient.EnumName = Object.freeze({...})`) for
 * all enum schemas in the spec.
 *
 * @param {Object} spec Full parsed OpenAPI spec.
 * @returns {string}
 */
function buildEnumObjects(spec)
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

    const jsName = schemaNameToJsName(schemaName);
    const lines = [];
    const firstDescLine = schema.description ? schema.description.split('\n')[0].trim() : '';

    lines.push('  /**');
    if (firstDescLine)
    {
      lines.push('   * ' + escDoc(firstDescLine));
      lines.push('   *');
    }
    lines.push('   * @enum {number}');
    lines.push('   */');
    lines.push('  WlClient.' + jsName + ' = Object.freeze({');

    for (const c of constants)
    {
      if (c.description)
      {
        lines.push('    /** ' + escDoc(c.description) + ' */');
      }
      lines.push('    ' + c.name + ': ' + c.value + ',');
    }

    lines.push('  });');
    blocks.push(lines.join('\n'));
  }

  return blocks.join('\n\n');
}

/**
 * Returns the first line of text, truncated to maxLen characters.
 * Strips OpenAPI YAML markdown links before truncation.
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

  const line = convertYamlLinks(String(text)).split('\n')[0].trim();
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
      enumJsName: propSchema.$ref ? getEnumJsName(propSchema.$ref) : null,
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
      let desc = p.description ? ' ' + escDoc(firstLine(p.description, 100)) : '';
      const enumJsName = (p.schema && p.schema.$ref) ? getEnumJsName(p.schema.$ref) : null;
      if (enumJsName && !desc.includes(enumJsName))
      {
        desc += (desc ? ' ' : ' ') + 'See {@link WlClient.' + enumJsName + '}.';
      }
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
      let desc = prop.description ? ' ' + escDoc(firstLine(prop.description, 80)) : '';
      if (prop.enumJsName && !desc.includes(prop.enumJsName))
      {
        desc += (desc ? ' ' : ' ') + 'See {@link WlClient.' + prop.enumJsName + '}.';
      }
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

  // Populate the enum names map first so convertYamlLinks and getEnumJsName work during generation.
  _enumJsNames.clear();
  for (const [schemaName, schema] of Object.entries((spec.components && spec.components.schemas) || {}))
  {
    if (schema && Array.isArray(schema.enum) && parseEnumConstants(schema.description || '').length > 0)
    {
      _enumJsNames.set(schemaName, schemaNameToJsName(schemaName));
    }
  }

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

  const enumsCode = buildEnumObjects(spec);
  const enumCount = enumsCode ? enumsCode.split('WlClient.').length - 1 : 0;

  const generatedBlock = methodsCode.replace(/\n+$/, '') +
    (enumsCode ? '\n\n  // ---------------------------------------------------------------------------\n' +
    '  // Enum constants (' + enumCount + ' total)\n' +
    '  // ---------------------------------------------------------------------------\n\n' +
    enumsCode : '');

  return templateSrc
    .replace(/\{\{VERSION\}\}/g, version)
    .replace(/\{\{SPEC_VERSION\}\}/g, specVersion)
    .replace(/\{\{BUILD_DATE\}\}/g, buildDate)
    .replace(/\{\{METHOD_COUNT\}\}/g, String(methodCount))
    .replace('// {{GENERATED_METHODS}}', generatedBlock);
}

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

main();
