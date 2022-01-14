import "cypress-real-events/support";

Cypress.Commands.add("vue", () => {
  return cy.wrap(Cypress.vueWrapper);
});
