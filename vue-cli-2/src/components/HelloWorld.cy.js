import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

it("shows the header", () => {
  mount(HelloWorld);
  cy.get("h1").contains("Welcome to Vuetify");
});
