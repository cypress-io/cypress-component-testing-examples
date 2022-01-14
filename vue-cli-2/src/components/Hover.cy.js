import { mount } from "@cypress/vue";
import Hover from "./Hover.vue";

describe("Hover.vue", () => {
  it("should display the price when the image is hovered over", () => {
    mount(Hover);

    cy.get(".v-card--reveal").should("not.exist");
    cy.get("[data-test='hover-image']").realHover(); // this is a custom Cypress command - from https://github.com/dmtrKovalenko/cypress-real-events
    cy.get(".v-card--reveal").should("exist");
  });
});
