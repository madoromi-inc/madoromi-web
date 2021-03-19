module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: 'tsconfig.json',
    },
  },
  rules: {
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'no-console': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
