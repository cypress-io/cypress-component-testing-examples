const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '../../vite.config.js'),
      },
    })
  })

  initPlugin(on, config);

  return config
}
