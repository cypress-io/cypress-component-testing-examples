import { mount } from '@cypress/vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm', () => {
  const username = 'johndoe';
  const password = 's3cret';

  describe('when form is initialized', () => {
    it('should render title with default text', () => {
      mount(<LoginForm />);
      cy.get('legend').should('have.text', 'Log In');
    });

    it('should renders title with supplied text', () => {
      const title = 'Please Authenticate';
      mount(<LoginForm title={title} />);
      cy.get('legend').should('have.text', title);
    });

    it('password input should be of type password', () => {
      mount(<LoginForm />);
      cy.get('label:contains("Password") input').should(
        'have.attr',
        'type',
        'password'
      );
    });
  });

  describe('when form is valid', () => {
    let onLoginSpy;

    beforeEach(() => {
      onLoginSpy = cy.spy().as('onLoginSpy');
      mount(<LoginForm onLogin={onLoginSpy} />);
      cy.get('label:contains("Username") input')
        .as('usernameInput')
        .type(username);
      cy.get('label:contains("Password") input')
        .as('passwordInput')
        .type(password);
      cy.get('button:contains("Login")').as('loginButton');
    });

    it('should call onLogin when login button is clicked', () => {
      cy.get('@loginButton').click();
      cy.get('@onLoginSpy').should('be.calledOnce');
    });

    it('should call onLogin when user clicks the enter key in one of the inputs', () => {
      cy.get('@passwordInput').type('{enter}');
      cy.get('@onLoginSpy').should('be.calledOnce');
    });

    it('onLogin should get username and password when form is submitted', () => {
      cy.get('@loginButton').click();
      cy.get('@onLoginSpy').should('have.been.calledWith', {
        username,
        password,
      });
    });
  });

  describe('when form is invalid', () => {
    let onLoginSpy;
    const usernameErrorQuery = 'span.error:contains("Username is required")';
    const passwordErrorQuery = 'span.error:contains("Password is required")';

    beforeEach(() => {
      onLoginSpy = cy.spy().as('onLoginSpy');
      mount(<LoginForm onLogin={onLoginSpy} />);
      cy.get('label:contains("Username") input').as('usernameInput');
      cy.get('label:contains("Password") input').as('passwordInput');
      cy.get('button:contains("Login")').as('loginButton');
    });

    it('should only show both validation errors after login button is clicked', () => {
      cy.get('@loginButton').click();
      cy.get('span.error').should('have.length', 2);
    });

    it('should not show any validation errors before login button is clicked', () => {
      cy.get('span.error').should('not.exist');
      cy.get('@usernameInput').type('abc123').clear();
      cy.get('span.error').should('not.exist');
      cy.get('@passwordInput').type('abc123').clear();
    });

    it('should show "Username is Required" error when form is submitted with username missing', () => {
      cy.get('@loginButton').click();
      cy.get('@passwordInput').type('abc123');
      cy.get(usernameErrorQuery).should('exist');
    });

    it('should show "Password is Required" error when form is submitted with password missing', () => {
      cy.get('@loginButton').click();
      cy.get('@usernameInput').type('abc123');
      cy.get(passwordErrorQuery).should('exist');
    });

    it('should show both errors when form is submitted with both fields missing', () => {
      cy.get('@loginButton').click();
      cy.get(usernameErrorQuery).should('exist');
      cy.get(passwordErrorQuery).should('exist');
    });
  });
});
