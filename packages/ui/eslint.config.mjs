// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';
import eslintConfig from '@repo/eslint-config/next-js';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });

export default [
  ...eslintConfig,
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.lint.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
