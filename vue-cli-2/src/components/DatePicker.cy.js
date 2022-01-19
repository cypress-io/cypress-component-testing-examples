import Vuetify from "vuetify";
import { mount } from "@cypress/vue";
import DatePicker from "./DatePicker.vue";

describe("DatePicker.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should mount the component", () => {
    mount(DatePicker, { global: { plugins: [vuetify] } });
  });
});
