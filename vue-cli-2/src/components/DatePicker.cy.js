import DatePicker from "./DatePicker.vue";

describe("DatePicker.vue", () => {
  it('should render the date picker', () => {
    cy.mount(DatePicker)
  })
});
