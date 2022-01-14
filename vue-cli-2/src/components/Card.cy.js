import { mount } from "@cypress/vue";
import Card from "./Card.vue";
import Vuetify from "vuetify";

describe("CustomCard.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("displays the correct title", () => {
    mount(Card, {
      propsData: {
        title: "Hello, World!",
      },
    });
    cy.get("[data-test='title']").contains("Hello, World!");
  });

  it("should emit an event when the action v-btn is clicked", () => {
    mount(Card, {
      vuetify,
      propsData: {
        title: "Hello, World!",
      },
    });

    cy.get("[data-test='action-button']")
      .click()
      .vue() // this is a custom Cypress command - located in cypress/support/component.js
      .then((wrapper) => {
        expect(wrapper.emitted("action-btn:clicked")).to.have.length(1);
      });
  });
});
