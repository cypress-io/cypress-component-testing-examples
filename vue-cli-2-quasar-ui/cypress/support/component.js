import { mount } from "@cypress/vue";
import { Quasar } from "quasar";
import quasarUserOptions from "../../src/quasar-user-options";

Cypress.Commands.add("mount", (component, options = {}) => {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];
  return mount(component, {
    ...options,
    global: {
      ...options.global,
      plugins: [[Quasar, quasarUserOptions], ...options.global.plugins],
    },
  });
});
