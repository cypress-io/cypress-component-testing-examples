const { defineConfig } = require('cypress');
const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require('@vue/cli-service/webpack.config');

module.exports = defineConfig({
  component: {
    devServer(cypressDevServerConfig) {
      return startDevServer({
        options: cypressDevServerConfig,
        webpackConfig,
      });
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
