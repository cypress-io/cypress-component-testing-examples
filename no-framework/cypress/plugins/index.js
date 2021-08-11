const { getSetupDevServer } = require('../../helpers/dev-server')

const setupDevServer = getSetupDevServer({ port: 9000 })

module.exports = (on, config) => {
  setupDevServer(on, config)
  return config
}
