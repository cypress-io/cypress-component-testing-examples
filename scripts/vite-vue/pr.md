1. Initialize a baseline Vue project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMIT_0}
2. Install project dependencies
   1. ${COMMAND_1}
   2. ${COMMAND_2}
   3. ${COMMIT_1}
3. Update app to move global styles into main.css file
   1. Move global app styles from [src/App.vue](src/App.vue) into [src/main.css](src/main.css)
   2. Update [src/main.js](src/main.js)
   3. ${COMMIT_2}
4. Add Cypress component testing support with sample tests
   1. ${COMMAND_3}
   2. Add [cypress.json](cypress.json)
   3. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   4. Add [src/App.spec.ct.js](src/App.spec.ct.js), [src/components/HelloWorld.spec.ct.js](src/components/HelloWorld.spec.ct.js)
   5. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   6. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   7. ${COMMIT_3}
5. Add Cypress Code Coverage
   1. ${COMMAND_4}
   2. Edit [.gitignore](.gitignore) to ignore .nyc_output and coverage directories
   3. Edit [cypress.json](cypress.json) to enable `coverage`
   4. Edit [cypress/plugins/index.js](cypress/plugins/index.js) to configure the Cypress code coverage task with Istanbul
   5. Edit [cypress/support/index.js](cypress/support/index.js) to import Cypress code coverage support
   6. ${COMMIT_4}
