import regSelector from '../../../support/selectors/registrationPageSelectors'

describe('User Registration', () => {
    beforeEach("Visit Application", () => {
        cy.fixture('registrationData.json').as('registrationData');
        cy.visit("/")
        cy.get(regSelector.registerPage).click();
    })

    it("TC01_Registration with blank information", () => {
        cy.get(regSelector.clickRegister).click();
        cy.get(regSelector.firstNameError).should('have.text', 'First name is required.');
        cy.get(regSelector.lastNameError).should('have.text', 'Last name is required.');
        cy.get(regSelector.emailError).should('have.text', 'Email is required.');
        cy.get(regSelector.passwordError).should('have.text', 'Password is required.');
        cy.get(regSelector.confirmPwdError).should('have.text', 'Password is required.');


    })
    it("TC02_Registration with registered Email", () => {
        cy.get('@registrationData').then((data) => {
            const user = data.existingEmail;
            cy.fillRegistrationForm(user.gender, user.firstName, user.lastName, user.email, user.password, user.date, user.month, user.year);
            cy.get(regSelector.clickRegister).click();
            cy.get(regSelector.errorMessage).contains("The specified email already exists");
        })

    })


    it('TC03_Validate Registration', () => {
        cy.get('@registrationData').then((data) => {
            const user = data.validUser;
            cy.fillRegistrationForm(user.gender, user.firstName, user.lastName, user.email, user.password, user.date, user.month, user.year);
            cy.get(regSelector.clickRegister).click();
            cy.get(regSelector.regSuccessMsg).should('have.text', 'Your registration completed');
        })
    })

});
