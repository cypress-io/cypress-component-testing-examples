1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Add react-router and update app to use it
   1. ${COMMAND_2}
   2. Update [src/index.js](src/index.js), [src/App.js](src/App.js), [src/App.css](src/App.css)
   3. ${COMMIT_1}
3. Add Cypress component testing support with a sample test
   1. ${COMMAND_3}
   2. Update [package.json](package.json) eslint config to include `"plugin:cypress/recommended"`
   3. Add [cypress.json](cypress.json)
   4. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   5. Add [src/App.spec.ct.js](src/App.spec.ct.js)
   6. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   7. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   8. ${COMMIT_2}
4. Add Cypress Code Coverage
   1. ${COMMAND_4}
   2. Edit [cypress.json](cypress.json) to enable `coverage`
   3. Edit [.gitignore](.gitignore) to ignore .nyc_output directory
   4. Edit [cypress/plugins/index.js](cypress/plugins/index.js) to configure the Cypress code coverage task
   5. Edit [cypress/support/index.js](cypress/support/index.js) to import Cypress code coverage support
   6. ${COMMIT_3}