const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/react-scripts')

module.exports = defineConfig({
  // Component testing, JavaScript, Create React App, Webpack
  component: {
    devServer,
    devServerConfig: {}
  },
})
