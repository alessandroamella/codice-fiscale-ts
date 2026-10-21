import { execFile as execFileCb } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { type BuildOptions, build as esbuild } from 'esbuild';

// Lowest Node version we support for consumers (see "engines" in package.json)
const nodeTarget = 'node18';
const browserTargets = ['es2020', 'chrome80', 'firefox80', 'safari15'];

const execFile = promisify(execFileCb);

const srcPath = path.join(process.cwd(), 'src');
const buildPath = path.join(process.cwd(), 'build');

async function clear(): Promise<void> {
  const time = Date.now();

  await fs.rm(buildPath, { recursive: true, force: true });

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
    console.error(stderr);
  }

  console.log(`📘 built definitions files in ${Date.now() - time} ms`);
}

async function extractDts(): Promise<void> {
  const time = Date.now();

  const { stderr } = await execFile('api-extractor', ['run']);

  if (stderr) {
    console.error(stderr);
  }

  // Drop the per-file declarations (and the directories they leave behind),
  // keeping only the rolled-up bundle
  await fs.rm(buildPath, { recursive: true, force: true });
  await fs.mkdir(buildPath);
  await fs.rename('trimmed.d.ts', path.join(buildPath, 'index.d.ts'));
  // CJS consumers need their own copy, otherwise TypeScript treats the types
  // as ESM ("type": "module") when resolving through the "require" condition
  await fs.copyFile(
    path.join(buildPath, 'index.d.ts'),
    path.join(buildPath, 'index.d.cts')
  );

  console.log(`📘 extracted definitions files in ${Date.now() - time} ms`);
}

async function build(): Promise<void> {
  const time = Date.now();

  // Common esbuild settings
  const commonSettings: BuildOptions = {
    entryPoints: [path.join(srcPath, 'index.ts')],
    outdir: buildPath,
    bundle: true,
    minify: true,
    treeShaking: true,
    legalComments: 'none',
    metafile: true
  };

  // Build ESM version, with code splitting so the data tables are lazy chunks
  const esmResult = await esbuild({
    ...commonSettings,
    platform: 'neutral',
    target: browserTargets,
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    splitting: true,
    chunkNames: 'chunks/[name]-[hash]'
  });

  // Build CommonJS version for Node.js and legacy code
  // (esbuild can't code split in CJS format)
  await esbuild({
    ...commonSettings,
    platform: 'node',
    target: nodeTarget,
    format: 'cjs',
    outExtension: { '.js': '.cjs' }
  });

  // Log filesize info for debugging
  if (esmResult.metafile) {
    const esmFiles = Object.entries(esmResult.metafile.outputs)
      .map(([file, info]) => ({ file, size: info.bytes }))
      .sort((a, b) => b.size - a.size);

    console.log('ESM output files:');
    for (const { file, size } of esmFiles) {
      console.log(`  ${file}: ${(size / 1024).toFixed(2)}KB`);
    }
  }

  console.log(`📦 bundled in ${Date.now() - time}ms`);
}

if (import.meta.main) {
  const time = Date.now();

  await clear();
  await buildDts();
  await extractDts();
  await build();

  console.log('🚀 built in', Date.now() - time, 'ms');
}
