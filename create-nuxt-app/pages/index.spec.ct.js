import { mount } from '@cypress/vue'
import Index from './index.vue'

it('shows the index', () => {
  mount(Index)
  cy.get("h2").should("contain", "Welcome to your Nuxt Application");
  cy.get("button").click();
  cy.get("[data-test=count]").should("have.text", "Total clicks: 1");
  cy.get("button").click();
})
