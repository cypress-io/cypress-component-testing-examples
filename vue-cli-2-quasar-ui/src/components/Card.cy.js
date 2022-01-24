import { mount } from "@cypress/vue";
import Card from "./Card.vue";

it("renders the Card component", () => {
  mount(Card);

  // cy.get("h1").contains("Hello Cypress!");
});
