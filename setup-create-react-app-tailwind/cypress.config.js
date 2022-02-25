const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/react-scripts')
const codeCoverageTask = require("@cypress/code-coverage/task")
require("@cypress/instrument-cra")

module.exports = defineConfig({
  coverage: true,
  codeCoverage: {
    exclude: "cypress/**/*.*",
  },
  // Component testing, JavaScript, Create React App, Webpack
  component: {
    devServer,
    devServerConfig: {},
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
})
