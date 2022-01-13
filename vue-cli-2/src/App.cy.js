import { mount } from "@cypress/vue";
import App from "./App.vue";

it("shows the App", () => {
  mount(App);
  cy.get('[alt="Vue logo"]');
  cy.get("h1").contains("Welcome to Your Vue.js App");
  cy.get("button").click();
  cy.get("[data-test=count]").should("have.text", "Total clicks: 1");
  cy.get("button").click();
});
