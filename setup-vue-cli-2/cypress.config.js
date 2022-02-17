const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = defineConfig({
  // Component testing, JavaScript, Vue CLI, Webpack
  component: {
    devServer,
    devServerConfig: { webpackConfig }
  },
})