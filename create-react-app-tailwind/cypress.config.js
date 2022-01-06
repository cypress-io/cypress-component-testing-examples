const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/react-scripts");

module.exports = defineConfig({
  component: {
    devServer,
    specPattern: "src/**/*.ct.{js,jsx,ts,tsx}",
  },
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    viewportHeight: 660,
    viewportWidth: 1000,
    setupNodeEvents(on, config) {
      //
    },
  }
});