import { build as esbuild } from 'esbuild';
import { isMain } from 'is-main';
import { execFile as execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { rimraf } from 'rimraf';
import packageJson from '../package.json' with { type: 'json' };

const esbuildTarget = `node${packageJson.volta.node.slice(0, 2)}`;
const browserTargets = ['es2020', 'chrome80', 'firefox80', 'safari14'];

const execFile = promisify(execFileSync);

const srcPath = path.join(process.cwd(), 'src');
const buildPath = path.join(process.cwd(), 'build');

async function clear(): Promise<void> {
  const time = Date.now();

  await fs.rm(buildPath, { recursive: true, force: true });

  // biome-ignore lint/suspicious/noConsole: script file
  // biome-ignore lint/suspicious/noConsoleLog: script file
  console.log(`🗑️ cleared in ${Date.now() - time}ms`);
}

async function buildDts(): Promise<void> {
  const time = Date.now();

  const { stderr } = await execFile('tsc', [
    '--emitDeclarationOnly',
    '--project',
    'tsconfig.build.json'
  ]);

  if (stderr) {
    // biome-ignore lint/suspicious/noConsole: script file
    console.error(stderr);
  }

  // biome-ignore lint/suspicious/noConsole: script file
  // biome-ignore lint/suspicious/noConsoleLog: script file
  console.log(`📘 built definitions files in ${Date.now() - time} ms`);
}

async function extractDts(): Promise<void> {
  const time = Date.now();

  const { stderr } = await execFile('api-extractor', ['run']);

  if (stderr) {
    // biome-ignore lint/suspicious/noConsole: script file
    console.error(stderr);
  }

  await rimraf('./build/**/*.d.ts', { glob: true });
  await fs.rename('trimmed.d.ts', 'build/index.d.ts');

  // biome-ignore lint/suspicious/noConsole: script file
  // biome-ignore lint/suspicious/noConsoleLog: script file
  console.log(`📘 extracted definitions files in ${Date.now() - time} ms`);
}

async function build(): Promise<void> {
  const time = Date.now();

  // Common esbuild settings
  const commonSettings = {
    nodePaths: [srcPath],
    sourcemap: true,
    bundle: true,
    minify: true,
    treeShaking: true,
    legalComments: 'none' as const,
    metafile: true,
    splitting: true
  };

  // Build ESM version
  const esmResult = await esbuild({
    ...commonSettings,
    platform: 'neutral',
    target: browserTargets,
    format: 'esm',
    entryPoints: [path.join(srcPath, 'index.ts')],
    outdir: buildPath,
    outExtension: { '.js': '.mjs' },
    // Enable code splitting for ESM
    splitting: true,
    chunkNames: 'chunks/[name]-[hash]'
  });

  // Build CommonJS version for Node.js and legacy code
  await esbuild({
    ...commonSettings,
    platform: 'node',
    target: esbuildTarget,
    format: 'cjs',
    entryPoints: [path.join(srcPath, 'index.ts')],
    outdir: buildPath,
    outExtension: { '.js': '.cjs' },
    // We can't use code splitting in CJS format
    splitting: false
  });

  // Log filesize info for debugging
  if (esmResult.metafile) {
    const esmFiles = Object.entries(esmResult.metafile.outputs)
      .map(([file, info]) => ({ file, size: info.bytes }))
      .sort((a, b) => b.size - a.size);

    // biome-ignore lint/suspicious/noConsole: script file
    console.log('ESM output files:');
    for (const { file, size } of esmFiles) {
      // biome-ignore lint/suspicious/noConsole: script file
      console.log(`  ${file}: ${(size / 1024).toFixed(2)}KB`);
    }
  }

  // Copy package.json to build directory with only the essential fields
  const essentialPkgFields = {
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    type: packageJson.type,
    license: packageJson.license,
    author: packageJson.author,
    keywords: packageJson.keywords,
    repository: packageJson.repository,
    publishConfig: packageJson.publishConfig,
    exports: packageJson.exports,
    main: packageJson.main,
    module: packageJson.module,
    types: packageJson.types
  };

  await fs.writeFile(
    path.join(buildPath, 'package.json'),
    JSON.stringify(essentialPkgFields, null, 2)
  );

  // biome-ignore lint/suspicious/noConsole: script file
  // biome-ignore lint/suspicious/noConsoleLog: script file
  console.log(`📦 bundled in ${Date.now() - time}ms`);
}

if (isMain(import.meta)) {
  const time = Date.now();

  await clear();
  await buildDts();
  await extractDts();
  await build();

  // biome-ignore lint/suspicious/noConsole: script file
  // biome-ignore lint/suspicious/noConsoleLog: script file
  console.log('🚀 built in', Date.now() - time, 'ms');
}
