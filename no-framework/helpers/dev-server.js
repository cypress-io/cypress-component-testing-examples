const fs = require('fs/promises')
const path = require('path')
const vite = require('vite')

// Vite dev server plugin for serving the AUT Frame HTML
const autFrameHtmlPlugin = (projectRoot) => {
  return {
    name: 'autFrameHtmlPlugin',
    // Ensure the aut-cypress script knows the project root so it can calculate the
    // proper path to load spec files
    config() {
      return {
        define: {
          __PROJECT_ROOT__: JSON.stringify(projectRoot),
        },
      }
    },
    // Ensure that requests to /__cypress/src/index.html (the URL the CT runner
    // expects the AUT Frame HTML to be served from) serves up aut-frame.html
    // with all necessary vite transforms
    async configureServer(server) {
      const html = await fs.readFile(path.join(__dirname, 'aut-frame.html'))
      server.middlewares.use('/__cypress/src/index.html', (req, res) => {
        server
          .transformIndexHtml(req.url, html.toString())
          .then((transformedHtml) => {
            res.end(transformedHtml)
          })
      })
    },
  }
}

// Start a dev server that:
// * Serves the AUT Frame HTML at /__cypress/src/index.html
// * Serves other files relative to the project root (eg. /src/Counter.spec.ct.js)
// * Supports Hot Module Reloading
const startDevServer = async (config) => {
  // Configure server
  const viteDevServer = await vite.createServer({
    configFile: false,
    root: config.projectRoot,
    base: '/__cypress/src/',
    plugins: [autFrameHtmlPlugin(config.projectRoot)],
  })
  // Start server
  const app = await viteDevServer.listen()
  // Return what Cypress CT requires
  return { port: app.config.server.port, close: app.httpServer.close }
}

// Inject Cypress dev server
const setupDevServer = (...args) => {
  // Old CT plugin signature: setupDevServer(on, config)
  if (typeof args[0] === 'function') {
    const [on, config] = args
    on('dev-server:start', (options) => {
      return startDevServer(config)
    })
  }
  // New CT plugin signature: setupDevServer(options)
  else {
    const [options] = args
    return startDevServer(options.config)
  }
}

module.exports = { setupDevServer }

// For testing purposes, if this script is run directly via node, start
// a standalone dev server
if (require.main === module) {
  const projectRoot = path.join(__dirname, '..')
  startDevServer({ projectRoot })
}
