import { mount } from '@cypress/react'
import Post from './post'

it('renders a post', () => {
  mount(
    <Post title='Hello World'>
      <p>This is some sample content</p>
    </Post>
  )
  cy.get('h1').contains('Hello World')
  cy.get('p').contains('This is some sample content')
})
