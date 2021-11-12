1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. `npx create-nuxt-app ${DIR}`
   2. ${COMMAND_0}
   3. ${COMMIT_0}
2. Add Cypress component testing support with sample tests
   1. ${COMMAND_1}
   2. Add [cypress.json](cypress.json)
   3. Add [cypress/plugins/index.js](cypress/plugins/index.js)
   4. Add [pages/index.spec.ct.js](pages/index.spec.ct.js), [components/Logo.spec.ct.js](components/Logo.spec.ct.js)
   5. `npx cypress open-ct`
   6. ${COMMIT_1}
3. Add Cypress Code Coverage
   1. ${COMMAND_2}
   2. Edit [cypress.json](cypress.json) to enable `coverage`
   3. Edit [cypress/plugins/index.js](cypress/plugins/index.js) to configure the Cypress code coverage task with Istanbul
   4. Edit [cypress/support/commands.js](cypress/support/commands.js) to import Cypress code coverage support
   5. Add [components/Counter.spec.ct.js](components/Counter.spec.ct.js)
   5. Update [src/index.spec.ct.js](src/index.spec.ct.js) to use Counter for interactivity
   7. Update [.babelrc](.babelrc) to use `babel-plugin-istanbul` for Cypress Component tests
   8. Add [.nycrc](.nycrc)
   9. Commit

Notes:

- The following bare minimum [`--answers`](https://github.com/nuxt/create-nuxt-app/blob/master/packages/create-nuxt-app/lib/prompts.js) were used when initializing this project with `npx create-nuxt-app` in step 1:

```json
${ANSWERS}
```
