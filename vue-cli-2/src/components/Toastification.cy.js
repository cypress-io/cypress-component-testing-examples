import { mount } from "@cypress/vue";
import Toastification from "./Toastification.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

it("shows the Toastification when the button is clicked", () => {
  mount(Toastification, { plugins: [Toast] });
  cy.get(".Vue-Toastification__toast").should("not.exist");
  cy.getBySel("toastification-button").click();
  cy.get(".Vue-Toastification__toast").should("be.exist");
});
