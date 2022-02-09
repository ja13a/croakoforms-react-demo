// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { 'code': 120 }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': false }]
  },
  ignorePatterns: [
    '/build-tools/*'
  ]
};