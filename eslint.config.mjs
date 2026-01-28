import { fileURLToPath } from 'node:url';
import path from 'node:path';
import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tsRecommendedRules = tsPlugin.configs['recommended-type-checked']?.rules ?? {};
const tsStrictRules = tsPlugin.configs['strict-type-checked']?.rules ?? {};
const tsStylisticRules = tsPlugin.configs['stylistic-type-checked']?.rules ?? {};
const jestRecommendedRules = jestPlugin.configs.recommended?.rules ?? {};
const jestStyleRules = jestPlugin.configs.style?.rules ?? {};

export default [
  {
    ignores: ['build/**', 'dist/**', 'lib/**', 'node_modules/**', '.snapshots/**', '**/*.min.js'],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...tsRecommendedRules,
      ...tsStrictRules,
      ...tsStylisticRules,
      'no-console': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'prettier/prettier': 'error',
    },
  },
  {
    files: [
      '**/*test.{ts,js}',
      '**/*spec.{ts,js}',
      '**/test/**/*.{ts,js}',
      '**/tests/**/*.{ts,js}',
      '**/*.test.{ts,js}',
      '**/*.spec.{ts,js}',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestRecommendedRules,
      ...jestStyleRules,
    },
  },
];
