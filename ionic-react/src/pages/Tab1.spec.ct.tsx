import React from 'react';
import { mount } from '@cypress/react';
import Tab1 from './Tab1';

it('has a title of Tab1', () => {
  mount(<Tab1 />);
  cy.get('ion-title').contains('Tab 1').should('be.visible');
});
