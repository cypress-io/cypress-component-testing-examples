1. Initialize a baseline project in the `${DIR}` subdirectory
   a. `npx create-nuxt-app ${DIR}`
   c. `${COMMAND_0}`
   d. Commit ${COMMIT_0}
2. Add Cypress component testing support with sample tests
   a. `${COMMAND_1}`
   b. Add `cypress.json`
   c. Add `cypress/plugins/index.js`
   d. Add `pages/index.spec.ct.js`, `components/Logo.spec.ct.js`
   e. `npx cypress open-ct`
   f. Commit ${COMMIT_1}

Notes:

- How can [pages](https://nuxtjs.org/docs/2.x/concepts/views#pages) be rendered inside their respective [layout](https://nuxtjs.org/docs/2.x/concepts/views#layouts) for testing?
- The `Logo` component doesn't render when viewing the `index.spec.ct.js` test in `open-ct`
- The following bare minimum [`--answers`](https://github.com/nuxt/create-nuxt-app/blob/master/packages/create-nuxt-app/lib/prompts.js) were used when initializing this project with `npx create-nuxt-app` in step 1:

```json
${ANSWERS}
```
