import { mount } from '@cypress/vue'
import Logo from './Logo.vue'

it('shows the logo', () => {
  mount(Logo)
  cy.get('svg').should('have.class', 'NuxtLogo')
})
