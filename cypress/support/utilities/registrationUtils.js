import selector from '../selectors/registrationPageSelectors'


export const enterRegistrationDetails = (gender, firstName, lastName, email, password, day, month, year) => {
  cy.get(`#gender-${gender}`).check();
  cy.get(selector.firstNameInput).type(firstName);
  cy.get(selector.lastNameInput).type(lastName);
  cy.get(selector.dateInput).select(day);
  cy.get(selector.monthInput).select(month);
  cy.get(selector.yearInput).select(year);
  cy.get(selector.emailInput).type(email);
  cy.get('.page-body > form').click();
  cy.get(selector.passwordInput).type(password);
  cy.get(selector.confPasswordInput).type(password);
}




