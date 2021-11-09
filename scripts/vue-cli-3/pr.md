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
   2. Add [cypress.json](cypress.json)
   3. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   4. Add [src/App.spec.ct.js](src/App.spec.ct.js), [src/components/HelloWorld.spec.ct.js](src/components/HelloWorld.spec.ct.js)
   5. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   6. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   7. ${COMMIT_2}
4. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.json](cypress.json) to enable `coverage`
   3. Edit [cypress/plugins/index.js](cypress/plugins/index.js) to configure the Cypress code coverage task with Istanbul
   4. Edit [cypress/support/commands.js](cypress/support/commands.js) to import Cypress code coverage support
   5. Update [src/App.spec.ct.js](src/App.spec.ct.js), [src/components/Counter.spec.ct.js](src/components/Counter.spec.ct.js) for interactivity
   6. Add [src/CounterComp.vue](src/components/CounterComp.vue), a Composition API component and add component test in [src/components/CounterComp.spec.ct.js](src/components/CounterComp.spec.ct.js) 
   7. Update [babel.config.js](babel.config.js) to conditionally use `babel-plugin-istanbul` when Cypress Component tests are running
   8. Add [.nycrc](.nycrc)
   9. ${COMMIT_3}

Notes:

- The following `${DIR}.json` [preset file](https://cli.vuejs.org/guide/plugins-and-presets.html#local-filesystem-preset) was used when initializing this project with `vue create` in step 1:

```json
${PRESET}
```