import { mount } from "@cypress/react";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  it("the first slide is active by default", () => {
    mount(<Carousel />);
    cy.getBySel("slide-1").should("have.class", "active");
  });

  it("the next button advances to the next slide", () => {
    mount(<Carousel />);
    cy.getBySel("carousel").within(() => {
      cy.get(".carousel-control-next").click();
      cy.getBySel("slide-2").should("have.class", "active");
    });
  });

  it("the prev button goes to the previous slide", () => {
    mount(<Carousel />);
    cy.getBySel("carousel").within(() => {
      cy.getBySel("slide-1").should("have.class", "active");

      cy.get(".carousel-control-next").click();
      cy.getBySel("slide-2").should("have.class", "active");

      cy.get(".carousel-control-prev").click();
      cy.getBySel("slide-1").should("have.class", "active");
    });
  });
});
