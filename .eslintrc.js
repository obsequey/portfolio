module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // add your custom rules here,
  rules: {
    'vue/no-v-html': 'off'
  },
  plugins: ['prettier', 'vue'],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  globals: {
    $nuxt: true
  }
}
