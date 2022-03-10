import { mount } from "@cypress/vue";
import Breadstick from "./Breadstick.vue";
import { BreadstickBakery } from "breadstick";

it("shows the toast when the button is clicked", () => {
  mount(Breadstick, { plugins: [BreadstickBakery] });
  cy.getBySel("breadstick-button").click();
});
