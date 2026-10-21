import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm', 'cjs'],
  // Neutral output so the ESM build works in browsers and bundlers too
  platform: 'neutral',
  target: ['es2020', 'chrome80', 'firefox80', 'safari15', 'node18'],
  // Always emit .mjs/.cjs (+ .d.mts/.d.cts), regardless of "type": "module"
  fixedExtension: true,
  dts: true,
  minify: true,
  // Sanity checks on the published package on every build
  publint: true,
  attw: { profile: 'node16' }
});
