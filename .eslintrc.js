module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  globals: {
    React: true
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' }
    ]
  }
}
