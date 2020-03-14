module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "arrow-parens": ["error", "as-needed"],
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "no-param-reassign": ["error", { "props": false }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true}]
  },
};
