module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.test.*', '*.spec.*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
    {
      files: ['__test__/**'],
      plugins: ['jest'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: 'error',
    curly: ['error', 'all'],
    'jest/no-focused-tests': 'warn',
    'no-duplicate-imports': 'error',
    'no-use-before-define': 'error',
    'no-useless-return': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'properties'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    'spaced-comment': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
