import { mount } from '@cypress/react';
import { Provider } from 'react-redux';
import { getStore } from '../../app/store';
import { Counter } from './Counter';

const TestCounter = () => (
  <Provider store={getStore()}>
    <Counter />
  </Provider>
)

it('starts at 0', () => {
  mount(<TestCounter />);
  cy.get('span').contains('0');
});

it('increments', () => {
  mount(<TestCounter />);
  cy.get('button[aria-label="Increment value"]').click()
  cy.get('span').contains('1');
});

it('decrements', () => {
  mount(<TestCounter />);
  cy.get('button[aria-label="Decrement value"]').click()
  cy.get('span').contains('-1');
});

it('adds an amount', () => {
  mount(<TestCounter />);
  cy.get('input[aria-label="Set increment amount"').clear().type('3')
  cy.get('button').contains('Add Amount').click()
  cy.get('span').contains('3');
});

it('adds an amount async', () => {
  mount(<TestCounter />);
  cy.get('input[aria-label="Set increment amount"').clear().type('4')
  cy.get('button').contains('Add Async').click()
  cy.get('span').contains('4');
});

it('adds an amount if odd', () => {
  mount(<TestCounter />);
  cy.get('button[aria-label="Increment value"]').click()
  cy.get('input[aria-label="Set increment amount"').clear().type('5')
  cy.get('button').contains('Add If Odd').click()
  cy.get('span').contains('6');
});

it('does not add an amount if even', () => {
  mount(<TestCounter />);
  cy.get('input[aria-label="Set increment amount"').clear().type('5')
  cy.get('button').contains('Add If Odd').click()
  cy.get('span').contains('0');
});
