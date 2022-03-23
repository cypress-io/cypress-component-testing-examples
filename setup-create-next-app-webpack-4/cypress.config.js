const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/next')
const codeCoverageTask = require("@cypress/code-coverage/task")

module.exports = defineConfig({
  coverage: true,
  codeCoverage: {
    exclude: "cypress/**/*.*",
  },
  component: {
    devServer,
    devServerConfig: {},
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
})