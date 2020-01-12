module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    indent: 0,
    'no-tabs': 0,
    'eol-last': ['error', 'always'],
    'no-underscore-dangle': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-process-exit': 'off',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
  },
};
