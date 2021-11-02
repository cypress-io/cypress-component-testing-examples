
const plugins = []

if (process.env.CYPRESS === true) {
  plugins.push("istanbul")
}

module.exports = {
  plugins,
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
