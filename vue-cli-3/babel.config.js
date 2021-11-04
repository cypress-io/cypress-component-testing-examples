const plugins = []

if (process.env.CYPRESS_INTERNAL_ENV === 'production') {
  plugins.push('istanbul')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}