module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
  },
  "parserOptions": {
    "ecmaVersion": 6
  }
};