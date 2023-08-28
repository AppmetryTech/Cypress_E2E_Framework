


export const enterRegistrationDetails = (firstName, lastName, email, password) => {
  cy.get('h1').should('have.text', 'Register Account');
  cy.get('#input-firstname').type(firstName);

  cy.get('#input-lastname').type(lastName);

  cy.get('#input-email').type(email);

  cy.get('#input-password').type(password);
  cy.get('#input-newsletter-no').check();
  //cy.get('.float-end > .form-check > .form-check-input').check();
  cy.get("input[value='1'][name='agree']").check();

}

export const checkAlert = (alertMessage) => {
  cy.on('window:alert', (alertMsg) => {
    expect(alertMsg).to.contain(alertMessage);
  })
}

export const getAlert = () => {
  cy.on('window:alert', (alertMsg) => {
    cy.log(alertMsg);
  })

}
