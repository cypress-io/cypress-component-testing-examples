import { mount } from '@cypress/vue'
import CounterComp from './CounterComp.vue'

it('shows the CounterComp', () => {
  mount(CounterComp)
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 1")
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 2")
})
