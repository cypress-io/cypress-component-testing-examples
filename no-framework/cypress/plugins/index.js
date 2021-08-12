const { setupDevServer } = require('../../helpers/dev-server')

module.exports = (on, config) => {
  setupDevServer(on, config)
  return config
}
