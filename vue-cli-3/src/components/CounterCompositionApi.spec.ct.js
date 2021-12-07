import { mount } from '@cypress/vue'
import CounterCompositionApi from './CounterCompositionApi.vue'

it('shows the CounterCompositionApi', () => {
  mount(CounterCompositionApi)
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 1")
  cy.get('button').click()
  cy.get('[data-test=count]').should("have.text", "Total clicks: 2")
})
