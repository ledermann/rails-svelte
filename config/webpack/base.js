const { webpackConfig, merge } = require('@rails/webpacker')
const svelteConfig = require('./rules/svelte')
const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "app/packs/src"),
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
}

module.exports = merge(svelteConfig, customConfig, webpackConfig)
