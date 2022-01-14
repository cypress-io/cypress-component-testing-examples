import { mount } from "@cypress/vue";
import DatePicker from "./DatePicker.vue";

describe("DatePicker.vue", () => {
  it("should disable unavailable dates", () => {
    mount(DatePicker);
  });
});
