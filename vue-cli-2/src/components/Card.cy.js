import { mount } from "@cypress/vue";
import Card from "./Card.vue";

describe("CustomCard.vue", () => {
  it("displays the correct title", () => {
    cy.mount(Card, {
      propsData: {
        title: "Hello, World!",
      },
    });
    cy.get("[data-test='title']").contains("Hello, World!");
  });

  it("should emit an event when the action v-btn is clicked", () => {
    cy.mount(Card, {
      propsData: {
        title: "Hello, World!",
      },
      listeners: {
        'action-btn:clicked': cy.spy().as('onActionButtonClicked') 
      }
    });

    cy.get("[data-test='action-button']")
      .click()
      .get('@onActionButtonClicked')
      .should('have.been.called')
  });
});
