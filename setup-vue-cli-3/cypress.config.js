const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config')
const codeCoverageTask = require("@cypress/code-coverage/task")

module.exports = defineConfig({
  coverage: true,
  codeCoverage: {
    exclude: "cypress/**/*.*",
  },
  // Component testing, JavaScript, Vue CLI, Webpack
  component: {
    devServer,
    devServerConfig: { webpackConfig },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
})