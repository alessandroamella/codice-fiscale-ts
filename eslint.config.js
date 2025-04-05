import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['node_modules', 'build', 'coverage']),
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended
]);
