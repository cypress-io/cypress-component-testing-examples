module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,vue}", '!src/**/*.spec.ct.js'],
    preset: "@vue/cli-plugin-unit-jest",
    transform: {
      "^.+\\.vue$": "vue-jest",
    },
  };