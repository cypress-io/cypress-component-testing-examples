import Card from "./Card.vue";

it("renders the Card component", () => {
  cy.mount(Card);

  cy.contains("Our Changing Planet");
});
