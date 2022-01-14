import { mount } from "@cypress/vue";
import Hover from "./Hover.vue";
import Vuetify from "vuetify";

describe("Hover.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should display the price when the image is hovered over", () => {
    mount(Hover);

    cy.get(".v-card--reveal").should("not.exist");
    cy.get("[data-test='hover-image']").realHover();
    cy.get(".v-card--reveal").should("exist");
  });
});
