module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'prettier',
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Basic Rules
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'no-undef': 'error',

    // Code Formatting
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 80, tabWidth: 2 }],
    'object-curly-spacing': ['error', 'always'],

    // TypeScript Rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Vue.js Rules
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
  },
}
