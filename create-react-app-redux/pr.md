1. Initialize a baseline project in the `${DIR}` subdirectory
   a. `${COMMAND_0}`
   b. `${COMMAND_1}`
   c. Commit ${COMMIT_0}
2. Update the app Redux store to be more easily testable
   a. Update `src/app/store.js`
   b. Commit ${COMMIT_1}
3. Add Cypress component testing support with a sample test
   a. `${COMMAND_2}`
   b. Update `package.json` eslint config to include `"plugin:cypress/recommended"`
   c. Add `cypress.json`
   d. Add `cypress/plugins/index.js`
   e. Add `src/App.spec.ct.js`
   f. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   g. Edit `cypress/support/index.js` to import global app styles, the Cypress test preview should update automatically
   h. Commit ${COMMIT_2}
