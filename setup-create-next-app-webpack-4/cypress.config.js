const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/next')

module.exports = defineConfig({
  component: {
    devServer,
  },
})