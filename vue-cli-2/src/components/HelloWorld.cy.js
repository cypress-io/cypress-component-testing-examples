import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

it('shows the header', () => {
  mount(HelloWorld, {
    propsData: {
      msg: 'Hello World'
    }
  })
  cy.get('h1').contains('Hello World')
})
