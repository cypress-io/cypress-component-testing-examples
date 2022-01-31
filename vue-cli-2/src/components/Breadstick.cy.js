import { mount } from "@cypress/vue";
import Breadstick from "./Breadstick.vue";

it("shows the toast when the button is clicked", () => {
  mount(Breadstick);
  cy.getBySel("breadstick-button").click();
});
