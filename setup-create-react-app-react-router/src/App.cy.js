import { mount } from "@cypress/react";
import { MemoryRouter } from "react-router";
import App from "./App";

const TestApp = ({ path = "/", initialEntries = [path] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <App />
  </MemoryRouter>
);

it("renders the home page when the path is /", () => {
  mount(<TestApp path="/" />);
  cy.get(".Page").contains("Home page content");
});

it("navigates to the about page", () => {
  mount(<TestApp path="/" />);
  cy.get("a").contains("About").click();
  cy.get(".Page").contains("About page content");
});

it("renders the about page when the path is /about", () => {
  mount(<TestApp path="/about" />);
  cy.get(".Page").contains("About page content");
});

it("navigates to the home page", () => {
  mount(<TestApp path="/about" />);
  cy.get("a").contains("Home").click();
  cy.get(".Page").contains("Home page content");
});
