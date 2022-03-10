import { mount } from "@cypress/react";
import Autocomplete from "./Autocomplete";

describe("Autocomplete", () => {
  it("the datepicker opens after clicking in the input", () => {
    mount(<Autocomplete />);

    cy.getBySel("autocomplete").within(() => {
      cy.get(".ant-select-dropdown").should("not.exist");
      cy.get(".ant-select-selection-search-input").type("john");

      cy.getBySel("autocomplete-option");

      // cy.get(".ant-select-item-option-content")
      //   .its(0)
      //   .contains("john@gmail.com");
    });
  });
});
