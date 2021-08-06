import { mount } from '../helpers/mount.js'
import { Hello } from './Hello.js'

describe('Hello', () => {
  it('clicks button to reveal greeting', () => {
    mount(Hello({ greetingVisible: false }))

    cy.get('h1').should('not.be.visible')

    cy.get('button').click()
    cy.get('h1').should('be.visible')
  })

  it('greeting is rendered visible by default', () => {
    mount(Hello({ greetingVisible: true }))
    cy.get('h1').should('be.visible')
  })
})
