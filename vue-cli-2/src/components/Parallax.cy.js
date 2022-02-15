import Parallax from "./Parallax.vue";

describe("Parallax.vue", () => {
  it("the background image should move as the page is scrolled", () => {
    cy.mount(Parallax);

    cy.getBySel("parallax").within(() => {
      cy.get(".v-parallax__image")
        .should("have.attr", "style")
        .should("contain", "transform: translate(-50%");

      cy.scrollTo(0, 200);

      cy.get(".v-parallax__image")
        .should("have.attr", "style")
        .should("contain", "transform: translate(-50%");
    });
  });
});
