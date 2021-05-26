1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Add Cypress component testing support with a sample test
   1. ${COMMAND_2}
   2. Update [package.json](package.json) eslint config to include `"plugin:cypress/recommended"`
   3. Add [cypress.json](cypress.json)
   4. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   5. Add [src/App.spec.ct.js](src/App.spec.ct.js)
   6. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   7. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   8. ${COMMIT_1}

Notes:

- Some older Create React App projects may need v4 of html-webpack-plugin, in which case you'd also need to do:
  - `yarn add -D html-webpack-plugin@4`
