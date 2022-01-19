import { mount } from "@cypress/react";
import Router from "./Router";

describe("Toast Component", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  it("the current page is 'Home' by default", () => {
    mount(<Router />);
    cy.getBySel("current-page-header").should("contain", "Home");
  });

  it("the 'About' button loads the 'About' component", () => {
    mount(<Router />);
    cy.getBySel("about-btn").click();
    cy.getBySel("current-page-header").should("contain", "About");
  });

  it("the 'Users' button loads the 'Users' component", () => {
    mount(<Router />);
    cy.getBySel("users-btn").click();
    cy.getBySel("current-page-header").should("contain", "Users");
  });
});
