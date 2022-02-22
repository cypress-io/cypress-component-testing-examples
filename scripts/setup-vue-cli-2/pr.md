1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Update app to move global styles into main.css file
   1. Move global app styles from [src/App.vue](src/App.vue) into [src/main.css](src/main.css)
   2. Update [src/main.js](src/main.js)
   3. ${COMMIT_1}
3. Add Cypress component testing support with sample tests
   1. ${COMMAND_2}
   2. Add [cypress.config.js](cypress.config.js)
   3. Add [cypress/component/index.html](cypress/component/index.html)
   1. Add [cypress/support/component.js](cypress/support/component.js)
   1. Update [src/App.vue](src/App.vue) to reference new [src/components/Counter.vue](src/components/Counter.vue) component
   1. Add [src/App.cy.js](src/App.cy.js), [src/components/HelloWorld.cy.js](src/components/HelloWorld.cy.js), [src/components/Counter.cy.js](src/components/Counter.cy.js) spec files
   5. `npx cypress open` (Notice that the fonts don't inherit global app styles)
   6. Edit [cypress/support/component.js](cypress/support/component.js) to import global app styles, the Cypress test preview should update automatically
   7. ${COMMIT_2}
4. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.config.js](cypress.config.js) to enable `coverage` and configure the Cypress code coverage task with Istanbul
   4. Edit [cypress/support/component.js](cypress/support/component.js) to import Cypress code coverage support
   5. Update [babel.config.js](babel.config.js) to conditionally use `babel-plugin-istanbul` when Cypress Component tests are running
   6. Add [.nycrc](.nycrc) to configure istanbul
   7. Edit [.gitignore](.gitignore) to ignore coverage and .nyc_output directories
   8. ${COMMIT_3}

Notes:

- The following `${DIR}.json` [preset file](https://cli.vuejs.org/guide/plugins-and-presets.html#local-filesystem-preset) was used when initializing this project with `vue create` in step 1:

```json
${PRESET}
```
