1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Update the app Redux store to be more easily testable
   1. Update [src/app/store.js](src/app/store.js)
   2. ${COMMIT_1}
3. Add Cypress component testing support with a sample test
   1. ${COMMAND_2}
   2. Update [package.json](package.json) eslint config to include `"plugin:cypress/recommended"`
   3. Add [cypress.config.js](cypress.config.js)
   5. Add [src/features/counter/Counter.cy.js](src/features/counter/Counter.cy.js)
   6. `npx cypress open` (Notice that the fonts don't inherit global app styles)
   7. Edit [cypress/support/component.js](cypress/support/component.js) to import global app styles, the Cypress test preview should update automatically
   8. ${COMMIT_2}
4. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.config.js](cypress.config.js) to enable `coverage` and configure the Cypress code coverage task
   3. Edit [.gitignore](.gitignore) to ignore .nyc_output directory
   4. Edit [cypress/support/component.js](cypress/support/component.js) to import Cypress code coverage support
   5. ${COMMIT_3}