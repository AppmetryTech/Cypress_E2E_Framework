import loginselector from '../selectors/loginPageSelectors'

export const doLogin = (email, password) => {

    cy.get(loginselector.emailInput).type(email);
    cy.get(loginselector.passwordInput).type(password);

}