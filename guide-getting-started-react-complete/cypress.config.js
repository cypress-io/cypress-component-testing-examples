const { defineConfig } = require('cypress');
const { devServer } = require('@cypress/react/plugins/react-scripts');

module.exports = defineConfig({
  component: {
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    devServer: devServer,
  },
});
