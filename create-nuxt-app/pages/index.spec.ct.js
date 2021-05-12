import { mount } from '@cypress/vue'
import Index from './index.vue'

it('shows the index', () => {
  mount(Index)
  cy.get('h1').contains('create-nuxt-app')
  cy.get('a').should('have.length', 2)
})
