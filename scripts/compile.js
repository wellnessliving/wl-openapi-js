'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function compile(version)
{
  const srcDir = path.join(ROOT, 'src', version);
  const outDir = path.join(ROOT, version);
  const tmpEsm = path.join(ROOT, '.tmp-esm-' + version);
  const tmpCjs = path.join(ROOT, '.tmp-cjs-' + version);

  if (!fs.existsSync(path.join(srcDir, 'index.ts')))
  {
    console.error('[' + version + '] src/' + version + '/index.ts not found — run generate-ts.js first.');
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(tmpEsm, { recursive: true });
  fs.mkdirSync(tmpCjs, { recursive: true });

  const baseOptions = {
    target: 'ES2017',
    lib: ['ES2017', 'DOM'],
    strict: true,
    skipLibCheck: true,
    rootDir: '.',
  };

  // ESM (with declarations)
  console.log('[' + version + '] Compiling ESM + .d.ts...');
  const tsconfigEsmPath = path.join(srcDir, '.tsconfig-esm.json');
  fs.writeFileSync(tsconfigEsmPath, JSON.stringify({
    compilerOptions: { ...baseOptions, module: 'ES2020', declaration: true, outDir: tmpEsm },
    files: ['index.ts'],
  }, null, 2));

  try
  {
    execSync('npx tsc -p .tsconfig-esm.json', { cwd: srcDir, stdio: 'inherit' });
  }
  finally
  {
    fs.unlinkSync(tsconfigEsmPath);
  }

  fs.copyFileSync(path.join(tmpEsm, 'index.js'), path.join(outDir, 'wl-sdk.esm.js'));
  fs.copyFileSync(path.join(tmpEsm, 'index.d.ts'), path.join(outDir, 'wl-sdk.d.ts'));
  fs.rmSync(tmpEsm, { recursive: true, force: true });
  console.log('[' + version + '] Written: ' + version + '/wl-sdk.esm.js, ' + version + '/wl-sdk.d.ts');

  // CJS
  console.log('[' + version + '] Compiling CJS...');
  const tsconfigCjsPath = path.join(srcDir, '.tsconfig-cjs.json');
  fs.writeFileSync(tsconfigCjsPath, JSON.stringify({
    compilerOptions: { ...baseOptions, module: 'CommonJS', outDir: tmpCjs },
    files: ['index.ts'],
  }, null, 2));

  try
  {
    execSync('npx tsc -p .tsconfig-cjs.json', { cwd: srcDir, stdio: 'inherit' });
  }
  finally
  {
    fs.unlinkSync(tsconfigCjsPath);
  }

  fs.copyFileSync(path.join(tmpCjs, 'index.js'), path.join(outDir, 'wl-sdk.cjs.js'));
  fs.rmSync(tmpCjs, { recursive: true, force: true });
  console.log('[' + version + '] Written: ' + version + '/wl-sdk.cjs.js');
}

const arg = process.argv[2];
const versions = arg ? [arg] : ['stable', 'dev'];

for (const version of versions)
{
  if (version !== 'stable' && version !== 'dev')
  {
    console.error('Unknown version: "' + version + '". Use "stable" or "dev".');
    process.exit(1);
  }
  compile(version);
}

console.log('Compile done.');
