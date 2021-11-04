import React from 'react'
import { mount } from '@cypress/react'
import { Counter } from './Counter'

it('renders the counter', () => {
  mount(<Counter />)
  cy.get('button').contains('count is: 0')
})

it('increments counter when clicked', () => {
  mount(<Counter />)
  cy.get('button').click().contains('count is: 1')
})
