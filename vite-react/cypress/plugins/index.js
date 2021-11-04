const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')
const codeCoverageTask = require('@cypress/code-coverage/task')
const istanbul = require('vite-plugin-istanbul')

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

  return config
}
