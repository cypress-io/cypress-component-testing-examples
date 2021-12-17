const injectDevServer = require("@cypress/react/plugins/react-scripts");
require("@cypress/instrument-cra");
const registerCoverageTasks = require("@cypress/code-coverage/task");

module.exports = (on, config) => {
  injectDevServer(on, config);
  registerCoverageTasks(on, config);
  return config;
};
