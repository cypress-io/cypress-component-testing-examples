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
   1. Add [cypress.json](cypress.json)
   1. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   1. Update [src/App.vue](src/App.vue) to reference new [src/components/Counter.vue](src/components/Counter.vue) component
   1. Add [src/App.spec.ct.js](src/App.spec.ct.js), [src/components/HelloWorld.spec.ct.js](src/components/HelloWorld.spec.ct.js) spec file
   1. Add [src/components/LoginForm.vue](src/components/LoginForm.vue) component
   1. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   1. Edit [cypress/support/index.js](cypress/support/index.js) to import global app styles, the Cypress test preview should update automatically
   1. ${COMMIT_2}

Notes:

- The following `${DIR}.json` [preset file](https://cli.vuejs.org/guide/plugins-and-presets.html#local-filesystem-preset) was used when initializing this project with `vue create` in step 1:

```json
${PRESET}
```
