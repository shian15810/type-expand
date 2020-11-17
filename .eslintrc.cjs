/* eslint-env node */
// @ts-check

/**
 * @type {import('eslint').Linter.Config & { parserOptions?: import('@typescript-eslint/parser').ParserOptions }}
 */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    extraFileExtensions: ['.cjs'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {},
  reportUnusedDisableDirectives: true,
};

module.exports = config;
