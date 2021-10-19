const injectDevServer = require('@cypress/react/plugins/next')
const codeCoverageTask = require('@cypress/code-coverage/task')

module.exports = (on, config) => {
  injectDevServer(on, config)
  codeCoverageTask(on, config)
  return config
}
