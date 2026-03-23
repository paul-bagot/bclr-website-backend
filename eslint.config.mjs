import { eslint } from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
      plugins: {
        '@typescript-eslint': tsPlugin,
        prettier: pluginPrettier,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        'prettier/prettier': [
          'error',
          {
            tabWidth: 2,
            useTabs: false,
            endOfLine: 'auto',
            singleQuote: true,
            semi: true,
          },
        ],
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  ],
};