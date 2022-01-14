import "cypress-real-events/support";

Cypress.Commands.add("vue", () => {
  return cy.wrap(Cypress.vueWrapper);
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
