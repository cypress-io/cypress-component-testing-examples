import { mount } from "@cypress/vue";
import Tour from "./Tour.vue";
import VueTour from "vue-tour";
import "vue-tour/dist/vue-tour.css";

it("the tour works", () => {
  mount(Tour, { plugins: [VueTour] });
  cy.getBySel("tour-container").should("exist");
  cy.getBySel("tour-container").within(() => {
    cy.get(".v-step").contains("Step 1");
    cy.get(".v-step__button-next").click();
    cy.get(".v-step").contains("Step 2");
    cy.get(".v-step__button-next").click();
    cy.get(".v-step").contains("Step 3");
  });
});
