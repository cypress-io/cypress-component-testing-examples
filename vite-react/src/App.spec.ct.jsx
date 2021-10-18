import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.get('a').contains('Learn React'); // core Cypress method
  cy.get('a').toMatchSnapshot(); // serialized element snapshot
  cy.get('a').toMatchImageSnapshot(); // targeted element image snapshot
  cy.get('.App').toMatchImageSnapshot(); // fullscreen image snapshot
})
