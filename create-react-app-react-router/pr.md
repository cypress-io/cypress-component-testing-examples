1. Initialize a baseline project in the `<DIR>` subdirectory
   a. `<COMMAND>`
   b. `<COMMAND>`
   c. Commit <COMMIT>
2. Add react-router and update app to use it
   a. `<COMMAND>`
   b. Update `src/index.js`, `src/App.js`, `src/App.css`
   c. Commit <COMMIT>
3. Add Cypress component testing support with a sample test
   a. `<COMMAND>`
   b. Update `package.json` eslint config to include `"plugin:cypress/recommended"`
   c. Add `cypress.json`
   d. Add `cypress/plugins/index.js`
   e. Add `src/App.spec.ct.js`
   f. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   g. Edit `cypress/support/index.js` to import global app styles, the Cypress test preview should update automatically
   h. Commit <COMMIT>
