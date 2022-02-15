const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/webpack-dev-server");
const webpackConfig = require("@vue/cli-service/webpack.config");

module.exports = defineConfig({
  component: {
    devServer,
    devServerConfig: { webpackConfig },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },
});
