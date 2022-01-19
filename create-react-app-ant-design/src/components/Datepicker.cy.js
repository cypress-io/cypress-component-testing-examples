import { mount } from "@cypress/react";
import Datepicker from "./Datepicker";
import dayjs from "dayjs";

const today = dayjs().format("YYYY-MM-DD");
const dayOfMonth = dayjs().date();

describe("Datepicker", () => {
  it("the datepicker opens after clicking in the input", () => {
    mount(<Datepicker />);

    cy.get(".ant-picker-dropdown").should("not.exist");
    cy.getBySel("date-picker").click();
    cy.get(".ant-picker-dropdown").should(
      "not.have.class",
      "ant-picker-dropdown-hidden"
    );
  });

  it.only("after selecting a date with the datepicker, the input has the correct date and value", () => {
    mount(<Datepicker />);

    cy.getBySel("date-picker").invoke("val").should("equal", "");
    cy.getBySel("date-picker").click();
    cy.contains("td", dayOfMonth).click();
    cy.getBySel("date-picker").invoke("val").should("equal", today);
  });
});
