const plugins = []

if (process.env.CYPRESS) {
  plugins.push('istanbul')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}