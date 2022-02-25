1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Add Cypress component testing support with a sample test
   1. ${COMMAND_2}
   2. Update [package.json](package.json) eslint config to include `"plugin:cypress/recommended"`
   3. Add [cypress.config.js](cypress.config.js)
   5. Add [src/App.cy.js](src/App.cy.js)
   6. `npx cypress open` (Notice that the fonts don't inherit global app styles)
   7. Edit [cypress/support/component.js](cypress/support/component.js) to import global app styles, the Cypress test preview should update automatically
   8. ${COMMIT_1}
3. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.config.js](cypress.config.js) to enable `coverage` and to configure the Cypress code coverage task
   3. Edit [.gitignore](.gitignore) to ignore .nyc_output directory
   4. Edit [cypress/support/component.js](cypress/support/component.js) to import Cypress code coverage support
   5. ${COMMIT_2}

Notes:

- Some older Create React App projects may need v4 of html-webpack-plugin, in which case you'd also need to do:
  - `yarn add -D html-webpack-plugin@4`
