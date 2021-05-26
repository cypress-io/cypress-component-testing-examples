import { mount } from '@cypress/react'
import P from './paragraph'

it('renders a paragraph', () => {
  mount(<P>hello world</P>)
  cy.get('p').contains('hello world')
})
