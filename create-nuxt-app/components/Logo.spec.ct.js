import { mount } from '@cypress/vue'
import NuxtLogo from './NuxtLogo.vue';

it('shows the logo', () => {
  mount(NuxtLogo)
  cy.get('svg').should('have.class', 'nuxt-logo');
})
