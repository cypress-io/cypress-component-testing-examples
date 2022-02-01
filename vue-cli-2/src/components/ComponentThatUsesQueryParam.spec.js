/// <reference types="cypress" />

import { mount } from "@cypress/vue";

// import StarFavorite from './StarFavorite.vue';
import ComponentThatUsesQueryParam from "./ComponentThatUsesQueryParam.vue";

const mountComponent = () => {
  return mount(ComponentThatUsesQueryParam, {

    // QUESTION: Is this the right way to mock the router? Is there a better way in a component test?
    mocks: {
      $route: {
        name: "test",
        query: {
          f: "a",
        },
      },
    },
  });
};

describe("Date Range Selection Popup", () => {
  let wrapper;
  beforeEach(() => {
    mountComponent();
  });

  it("Reads Route Query Params", () => {
    cy.get("h1").contains("a").should("exist");
  });
  it("Writes Route Query Params", () => {
    cy.get('button').click()
    // QUESTION: How do I confirm that `updateQueryParams` was called? How do I stub it to prevent it from calling this.$router, which does not exist in this component test? Or how do I mock my router and then
    //  check to confirm that I now have `f=b` in my route?
  });
});
