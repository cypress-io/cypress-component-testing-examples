import { mount } from "@cypress/vue";
import Multiselect from "./Multiselect.vue";

it("the Multiselect opens when clicked", () => {
  mount(Multiselect);

  cy.get(".multiselect__content-wrapper").should("not.be.visible");

  cy.getBySel("multiselect").click();

  cy.get(".multiselect__content-wrapper").should("be.visible");
});
