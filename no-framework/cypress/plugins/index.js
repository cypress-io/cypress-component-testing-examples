const { injectDevServer } = require('../../helpers/dev-server')

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}
