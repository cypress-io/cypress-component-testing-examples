const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/vite-dev-server')
const codeCoverageTask = require("@cypress/code-coverage/task")

module.exports = defineConfig({
  coverage: true,
  codeCoverage: {
    exclude: "cypress/**/*.*",
  },
  // Component testing, JavaScript, Vue.js, Vite
  component: {
    devServer,
    devServerConfig: {},
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
})