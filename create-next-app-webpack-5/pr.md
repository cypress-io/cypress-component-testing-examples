1. Initialize a baseline "nested-components" project in the `<DIR>` subdirectory
   a. `<COMMAND>`
   b. `<COMMAND>`
   c. Commit <COMMIT>
2. Enable Webpack 5
   a. Update `next.config.js`
   b. Commit <COMMIT>
3. Add Cypress component testing support with sample tests
   a. `<COMMAND>`
   b. Add `cypress.json`
   c. Add `cypress/plugins/index.js`
   d. Add `components/paragraph.spec.ct.js`, `components/post.spec.ct.js`, `pages/index.spec.ct.js`
   e. `npx cypress open-ct`
   f. Commit <COMMIT>
