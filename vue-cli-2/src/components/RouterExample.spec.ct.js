import { mount } from "@cypress/vue";
import RouterExample from "./RouterExample.vue";

const mockRoute = {
  name: "test",
  query: {
    myParam: "defaultValue",
  },
};

const mockRouter = ({ pushSpy }) => ({
  push: pushSpy,
});

const mountComponent = ({ pushSpy }) => {
  return mount(RouterExample, {
    mocks: {
      $route: mockRoute,
      $router: mockRouter({ pushSpy }),
    },
  });
};

describe("Date Range Selection Popup", () => {
  let pushSpy;
  beforeEach(() => {
    pushSpy = cy.spy();
    mountComponent({ pushSpy });
  });

  it("Reads default query param value", () => {
    cy.get("div").contains("defaultValue").should("exist");
  });
  it("Writes new value to mocked router", () => {
    cy.get("button")
      .click()
      .then(() => {
        expect(pushSpy).to.be.calledWith({
          name: 'test',
          query: {
            myParam: "newVal",
          },
        });
      });
  });
});
