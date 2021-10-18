import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

beforeEach(() => {
  mount(HelloWorld, {
    propsData: {
      msg: 'Hello World',
    },
  })
})

it('shows the header', () => {
  cy.get('h1').contains('Hello World')
  cy.get('h1').toMatchSnapshot(); // serialized element snapshot
  cy.get('h1').toMatchImageSnapshot(); // targeted element image snapshot
  cy.get('#__cy_vue_root').toMatchImageSnapshot(); // fullscreen image snapshot
})

it('renders the counter', () => {
  cy.get('button').contains('count is: 0')
})

it('increments counter when clicked', () => {
  cy.get('button').click().contains('count is: 1')
})
