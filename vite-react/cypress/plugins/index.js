const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')
const codeCoverageTask = require('@cypress/code-coverage/task')
const istanbul = require('vite-plugin-istanbul')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      viteConfig: {
        clearScreen: false,
        plugins: [istanbul({})],
      },
    })
  })

  codeCoverageTask(on, config);
  initPlugin(on, config);
  
  return config
}
