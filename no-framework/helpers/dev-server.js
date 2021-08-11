const path = require('path')
const express = require('express')
const webpack = require('webpack')
const { createFsFromVolume, Volume } = require('memfs')

// Send AUT HTML as response
const sendHtml = (req, res) => {
  res.sendfile(path.join(__dirname, 'aut-frame.html'))
}

// Compile spec file (including any js/css imports) into a bundle in memory,
// and return a promise that resolves with the bundle contents or rejects
// with an error message
const compileSpec = (projectRoot, specPath) => {
  const fs = createFsFromVolume(new Volume())
  const compiler = webpack({
    mode: 'development',
    context: projectRoot,
    entry: specPath,
    output: { filename: specPath.substring(1) },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  })
  compiler.outputFileSystem = fs
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err)
        reject(err.message)
      } else if (stats.hasErrors()) {
        const info = stats.toJson()
        console.error(info.errors[0].details)
        reject(info.errors[0].message)
      } else {
        console.log(stats.toString({ chunks: false, colors: true }))
        const content = fs.readFileSync(`dist${specPath}`)
        resolve(content.toString())
      }
    })
  })
}

// Process spec file and send bundle as response
const sendSpecBundle =
  ({ projectRoot }) =>
  (req, res) => {
    const [, specPath] = req.path.split(projectRoot)
    compileSpec(projectRoot, specPath)
      .then((generatedScript) => {
        res.setHeader('Content-Type', 'text/javascript')
        res.send(generatedScript)
      })
      .catch((errMessage) => {
        res.status(500).send(errMessage)
      })
  }

// Start the dev server
const startDevServer = (port, config) => {
  const app = express()
  // Serve HTML file that the AUT frame loads initially
  app.get('/__cypress/src/index.html', sendHtml)
  // Serve spec files, processed into a bundle
  app.get('/spec/*', sendSpecBundle(config))
  // Start server
  const server = app.listen(port)
  return { port, close: server.close }
}

// Inject Cypress dev server
const getSetupDevServer =
  ({ port = 9000 } = {}) =>
  (...args) => {
    // Old CT plugin signature: setupDevServer(on, config)
    if (typeof args[0] === 'function') {
      const [on, config] = args
      on('dev-server:start', (options) => {
        return startDevServer(port, config)
      })
    }
    // New CT plugin signature: setupDevServer(options)
    else {
      const [options] = args
      return startDevServer(port, options.config)
    }
  }

module.exports = { getSetupDevServer }

// For testing purposes, if this script is run directly via node, start
// a standalone dev server
if (require.main === module) {
  const projectRoot = path.join(__dirname, '..')
  const port = process.env.PORT || 9000
  startDevServer(port, { projectRoot })
}
