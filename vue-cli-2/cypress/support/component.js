import { mount } from '@cypress/vue';
import 'vuetify/dist/vuetify.min.css';
import 'cypress-real-events/support';
import Vue from 'vue';
import Vuetify, { VApp } from 'vuetify/lib';

document.head.appendChild(Cypress.$(`<link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">`)[0])

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.extensions = options.extensions || {};
  options.extensions.plugins = options.extensions.plugins || [];
  options.extensions.components = options.extensions.components || {};

  /* Add any global plugins */
  Vue.use(Vuetify);
  const vuetify = new Vuetify({});
  options.vuetify = vuetify;

  return mount(
    {
      render: (h) => {
        return h(VApp, { vuetify }, [
          h(component, {
            vuetify,
            props: options.propsData,
            on: {
              ...options.listeners,
            },
            extensions: options.extensions,
          }),
        ]);
      },
    },
    options
  );
});

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
