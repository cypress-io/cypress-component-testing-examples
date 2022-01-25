import HelloWorld from "./HelloWorld.vue";

it("shows the header", () => {
  cy.mount(HelloWorld);
  cy.get("h1").contains("Welcome to Vuetify");
});
