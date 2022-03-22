1. Initialize a baseline "nested-components" project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Add Cypress component testing support with sample tests
   1. ${COMMAND_2}
   2. Add [cypress.json](cypress.json)
   3. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   4. Add [components/paragraph.spec.ct.js](components/paragraph.spec.ct.js), [components/post.spec.ct.js](components/post.spec.ct.js), [pages/index.spec.ct.js](pages/index.spec.ct.js)
   5. `npx cypress open-ct`
   6. ${COMMIT_1}
3. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.config.js](cypress.config.js) to enable `coverage` and configure the Cypress code coverage task
   3. Edit [.gitignore](.gitignore) to ignore .nyc_output directory
   4. Edit [cypress/support/component.js](cypress/support/component.js) to import Cypress code coverage support
   5. Add [.babelrc](.babelrc) to `babel-plugin-istanbul` when Cypress Component tests are running
   6. ${COMMIT_2}