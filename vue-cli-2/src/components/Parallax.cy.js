import { mount } from "@cypress/vue";
import Parallax from "./Parallax.vue";
import Vuetify from "vuetify";

describe("Parallax.vue", () => {
  let vuetify;

  beforeEach(() => {
    // cy.viewport(1024, 2500);
  });

  it("the background image should move as the page is scrolled", () => {
    mount(Parallax);

    cy.getBySel("parallax").within(() => {
      cy.get(".v-parallax__image")
        .should("have.attr", "style")
        .should("contain", "transform: translate(-50%, 278px)");

      cy.scrollTo(0, 200);

      cy.get(".v-parallax__image")
        .should("have.attr", "style")
        .should("contain", "transform: translate(-50%, 394px)");
    });
  });
});
