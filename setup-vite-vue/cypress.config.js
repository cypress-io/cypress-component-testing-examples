const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/vite-dev-server')

module.exports = defineConfig({
  // Component testing, JavaScript, Vue.js, Vite
  component: {
    devServer,
    devServerConfig: {}
  },
})