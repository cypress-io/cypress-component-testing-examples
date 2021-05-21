1. Initialize a baseline project in the `${DIR}` subdirectory
   a. `${COMMAND_0}`
   b. `${COMMAND_1}`
   c. Commit ${COMMIT_0}
2. Add Tailwind CSS
   a. Follow the [Tailwind documentation](https://tailwindcss.com/docs/guides/create-react-app)
   b. Commit ${COMMIT_1}
3. Update app to use Tailwind styles
   a. Update `src/app/App.js` and `src/app/App.css`
   b. Commit ${COMMIT_2}
4. Add Cypress component testing support with a sample test
   a. `${COMMAND_2}`
   b. Update `package.json` eslint config to include `"plugin:cypress/recommended"`
   c. Add `cypress.json`
   d. Add `cypress/plugins/index.js`
   e. Add `src/App.spec.ct.js`
   f. `npx cypress open-ct` (Notice that the fonts don't inherit global app styles)
   g. Edit `cypress/support/index.js` to import Tailwind and global app styles, the Cypress test preview should update automatically
   h. Commit ${COMMIT_3}
