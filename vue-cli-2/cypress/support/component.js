import { mount } from '@cypress/vue'
import 'vuetify/dist/vuetify.min.css'
import "cypress-real-events/support";
import Vuetify, { VApp } from 'vuetify/lib'

document.head.appendChild(Cypress.$(`<link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">`)[0])

Cypress.Commands.add('mount', (component, options = {}) => {
  const vuetify = new Vuetify({})
  return mount({
    render: (h) => {
      return h(VApp, { vuetify }, [
        h(component, {
          vuetify,
          props: options.propsData,
          on: {
            ...options.listeners,
          }
        })
      ])
    },
  }, {
    ...options,
    plugins: [Vuetify],
    vuetify,
    listeners: options.listeners
  })
})

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
