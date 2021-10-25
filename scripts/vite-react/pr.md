1. Initialize a baseline React project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMIT_0}
2. Install project dependencies
   1. ${COMMAND_1}
   2. ${COMMAND_2}
   3. ${COMMIT_1}
3. Refactor app into separate components, adjust global styles
   1. Move some code from [src/App.jsx](src/App.jsx) into [src/Counter.jsx](src/Counter.jsx)
   2. Move some styles from [src/App.css](src/App.css) into [src/Counter.css](src/Counter.css)
   3. Move global app styles into [src/index.css](src/index.css)
   4. ${COMMIT_2}
4. Add Cypress component testing support with sample tests
   1. ${COMMAND_3}
   2. Add [cypress.json](cypress.json)
   3. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   4. Add [src/App.spec.ct.jsx](src/App.spec.ct.jsx), [src/Counter.spec.ct.jsx](src/Counter.spec.ct.jsx)
   5. `npx cypress open-ct` (Notice that the background doesn't inherit global app styles)
   6. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   7. ${COMMIT_3}
4. Add Cypress Code Coverage
   1. ${COMMAND_4}
   2. Edit [cypress.json](cypress.json) to enable `coverage`
   3. Edit [cypress/plugins/index.js](cypress/plugins/index.js) to configure the Cypress code coverage task with Istanbul
   4. Edit [cypress/support/commands.js](cypress/support/commands.js) to import Cypress code coverage support
   5. ${COMMIT_4}
