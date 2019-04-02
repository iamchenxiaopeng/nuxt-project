module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'generator-star-spacing': 'off',
    // allow debugger during development
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',//关闭未定义检查
    'camelcase': 'off',//关闭强制驼峰检查
    'eqeqeq': 'off',//关闭全等检查
    "object-curly-spacing": 'off',
    "padded-blocks": 'off',
    "arrow-parens": 'off',
    "indent": 'off',
  }
}
