const { startDevServer } = require("@cypress/webpack-dev-server");
const codeCoverageTask = require("@cypress/code-coverage/task");
const { getWebpackConfig } = require("nuxt");

module.exports = (on, config) => {
  on("dev-server:start", async options => {
    const webpackConfig = await getWebpackConfig();
    return startDevServer({
      options,
      webpackConfig
    });
  });

  codeCoverageTask(on, config);
  return config;
};
