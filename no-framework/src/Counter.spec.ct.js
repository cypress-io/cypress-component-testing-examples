import { mount } from '../helpers/mount.js'
import { Counter } from './Counter.js'

describe('Counter', () => {
  it('should display correct default value', () => {
    mount(Counter())
    cy.get('span').should('contain', '0')
  })

  it('should display specified initial value', () => {
    mount(Counter({ initialValue: 99 }))
    cy.get('span').should('contain', '99')
  })

  it('should display negative numbers', () => {
    mount(Counter({ initialValue: -10 }))
    cy.get('span').should('contain', '-10')
  })

  it('should decrement value when clicked', () => {
    mount(Counter({ initialValue: 25 }))
    cy.get('button').contains('-').click()
    cy.get('span').should('contain', '24')
  })

  it('should increment value when clicked', () => {
    mount(Counter({ initialValue: 25 }))
    cy.get('button').contains('+').click()
    cy.get('span').should('contain', '26')
  })
})
