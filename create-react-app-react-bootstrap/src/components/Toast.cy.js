import { mount } from "@cypress/react";
import Toast from "./Toast";

describe("Toast Component", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  it("shows the toast by default", () => {
    mount(<Toast />);

    cy.getBySel("toast").should("be.visible");
  });

  it("closes the toast when the 'X' button is clicked", () => {
    mount(<Toast />);

    cy.getBySel("toast-header").within(() => {
      cy.get("button").click();
    });

    cy.getBySel("toast").should("not.exist");
  });

  it.only("the 'Show Toast' button displays the toast ", () => {
    mount(<Toast />);

    cy.getBySel("toast-header").within(() => {
      cy.get("button").click();
    });

    cy.getBySel("toast").should("not.exist");

    cy.getBySel("show-toast-button").click();
    cy.getBySel("toast").should("exist");
    cy.getBySel("toast").should("be.visible");
  });
});
