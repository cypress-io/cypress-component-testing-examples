const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/react-scripts");

module.exports = defineConfig({
  component: {
    devServer,
    componentFolder: "src",
    testFiles: "**/*.test.{js,ts,jsx,tsx}",
  },
});
