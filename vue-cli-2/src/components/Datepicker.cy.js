import { mount } from "@cypress/vue";
import Datepicker from "./Datepicker.vue";
import dayjs from "dayjs";

const today = dayjs().format("YYYY-MM-DD");

it("shows the Datepicker when the input is clicked", () => {
  mount(Datepicker);
  cy.get(".mx-datepicker-main").should("not.exist");

  cy.getBySel("datepicker-format").within(() => {
    cy.get("input").click();
  });

  cy.get(".mx-datepicker-main").should("be.exist");
});

it("it knows what the current day is", () => {
  mount(Datepicker);
  cy.getBySel("datepicker-format").within(() => {
    cy.get("input").click();
  });

  cy.get(".mx-datepicker-main").within(() => {
    cy.get(`td[title=${today}]`).should("have.class", "today");
  });
});
