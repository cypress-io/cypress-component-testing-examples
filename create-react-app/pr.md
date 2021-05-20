1. Initialize a baseline project in the `<DIR>` subdirectory
   a. `<COMMAND>`
   b. `<COMMAND>`
   c. Commit <COMMIT>
2. Add Cypress component testing support with a sample test
   a. `<COMMAND>`
   b. Update `package.json` eslint config to include `"plugin:cypress/recommended"`
   c. Add `cypress.json`
   d. Add `cypress/plugins/index.js`
   e. Add `src/App.spec.ct.js`
   f. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   g. Edit `cypress/support/index.js` to import global app styles, the Cypress test preview should update automatically
   h. Commit <COMMIT>

Notes:

- Current Create React App uses webpack@4 (2021-05-11)
- Some older Create React App projects may need v4 of html-webpack-plugin, in which case you'd need to do:
  - `yarn add -D html-webpack-plugin@4`
