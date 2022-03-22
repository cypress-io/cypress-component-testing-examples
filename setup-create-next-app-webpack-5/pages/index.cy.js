import { mount } from '@cypress/react'
import Home from './index'

it('renders the Home page', () => {
  mount(<Home />)
  cy.get('h1').should('have.length', 3)
  cy.get('p').should('have.length', 6)
  cy.get('hr').should('have.length', 2)
})
