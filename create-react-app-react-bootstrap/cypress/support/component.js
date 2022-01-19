// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
