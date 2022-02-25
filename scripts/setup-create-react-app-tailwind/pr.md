1. Initialize a baseline project in the [${DIR}](.) subdirectory
   1. ${COMMAND_0}
   2. ${COMMAND_1}
   3. ${COMMIT_0}
2. Add Tailwind CSS
   1. Follow the [Tailwind documentation](https://tailwindcss.com/docs/guides/create-react-app)
   2. ${COMMIT_1}
3. Update app to use Tailwind styles
   1. Update [src/app/App.js](src/app/App.js) and [src/app/App.css](src/app/App.css)
   2. ${COMMIT_2}
4. Add Cypress component testing support with a sample test
   1. ${COMMAND_2}
   2. Update [package.json](package.json) eslint config to include `"plugin:cypress/recommended"`
   3. Add [cypress.config.js](cypress.config.js)
   4. Add [src/App.cy.js](src/App.cy.js)
   5. `npx cypress open` (Notice that the fonts don't inherit global app styles)
   6. Edit [cypress/support/component.js](cypress/support/component.js) to import Tailwind and global app styles, the Cypress test preview should update automatically
   7. ${COMMIT_3}
4. Add Cypress Code Coverage
   1. ${COMMAND_3}
   2. Edit [cypress.config.js](cypress.config.js) to enable `coverage` and configure the Cypress code coverage task
   3. Edit [.gitignore](.gitignore) to ignore .nyc_output directory
   4. Edit [cypress/support/component.js](cypress/support/component.js) to import Cypress code coverage support
   5. ${COMMIT_4}