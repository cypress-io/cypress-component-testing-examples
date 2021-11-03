

module.exports = {
  overrides: [{
    test: [
      './src',
      './tests',
    ],
    // presets for app and test files
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }, {
    test: [
      './cypress',
    ],
    // overrides for cypress files
    plugins: ["istanbul"]
  }],
}
