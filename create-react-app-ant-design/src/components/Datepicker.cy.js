import { mount } from "@cypress/react";
import Datepicker from "./Datepicker";

it("mounts", () => {
  mount(<Datepicker />);

  cy.getBySel("date-picker").click();
  cy.get(".ant-picker").should("have.class", "ant-picker-focused");
});
