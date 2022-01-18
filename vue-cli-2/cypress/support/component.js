import "cypress-real-events/support";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

Cypress.Commands.add("vue", () => {
  return cy.wrap(Cypress.vueWrapper);
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
