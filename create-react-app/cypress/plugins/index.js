const injectDevServer = require("@cypress/react/plugins/react-scripts");
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  injectDevServer(on, config);
  initPlugin(on, config);
  return config;
};
