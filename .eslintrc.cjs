module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@ota-meshi/svelte/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'unused-imports', 'json-format'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: 'error',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral', 'ConditionalExpression'],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: 'off',
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        worker: 'never',
        svelte: 'always',
      },
    ],
    // 'svelte3/typescript': true,
    // 'svelte3/named-blocks': true
  },
};
