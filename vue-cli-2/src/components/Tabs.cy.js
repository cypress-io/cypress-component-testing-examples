import { mount } from "@cypress/vue";
import Tabs from "./Tabs.vue";

describe("Tabs.vue", () => {
  it("when a tab is selected, aria-selected='true'", () => {
    mount(Tabs);
    cy.getBySel("tab-0").invoke("attr", "aria-selected").should("eq", "true");
  });
});