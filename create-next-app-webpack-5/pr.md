1. Initialize a baseline "nested-components" project in the `${DIR}` subdirectory
   a. `${COMMAND_0}`
   b. `${COMMAND_1}`
   c. Commit ${COMMIT_0}
2. Enable Webpack 5
   a. Update `next.config.js`
   b. Commit ${COMMIT_1}
3. Add Cypress component testing support with sample tests
   a. `${COMMAND_2}`
   b. Add `cypress.json`
   c. Add `cypress/plugins/index.js`
   d. Add `components/paragraph.spec.ct.js`, `components/post.spec.ct.js`, `pages/index.spec.ct.js`
   e. `npx cypress open-ct`
   f. Commit ${COMMIT_2}
