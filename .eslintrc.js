module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['html', 'css-modules', 'solid', '@html-eslint'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:solid/recommended',
    'plugin:css-modules/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
  },
};
