import { mount } from '@cypress/vue'
import Counter from './Counter.vue'

it('shows the Counter', () => {
  mount(Counter)
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 1")
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 2")
})
