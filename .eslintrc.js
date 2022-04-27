module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'eslint-plugin-vue'],
  rules: {
    'space-before-function-paren': 0,
  },
}
