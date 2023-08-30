import Loginselector from '../../../support/selectors/loginPageSelectors'
import Dashboardselector from '../../../support/selectors/dashboardPageSelector'

describe("Login Tests", () => {
    beforeEach("Visit Application", () => {
        cy.fixture('loginData.json').as('loginData');
        cy.visit("/")
        cy.get(Loginselector.loginPage).click();
    })

    it("TC01_Validate-User Login With Blank Details  {smoke}", () => {
        // tag: smoke
        cy.get(Loginselector.clickLogin).click();
        cy.get(Loginselector.emailError).should('have.text', 'Please enter your email');

    })


    it('TC02_Validate-User Login With Unregistered Email', () => {
        cy.get('@loginData').then((data) => {
            const user = data.unregisteredEmail;
            cy.doLogin(user.email, user.password);
            cy.get(Loginselector.clickLogin).click();
            cy.get(Loginselector.messageError).should('have.text', 'Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
        })
    });


    it('TC03_Validate-User Login With Wrong Password {smoke}', () => {
        cy.get('@loginData').then((data) => {
            const user = data.wrongPass;
            cy.doLogin(user.email, user.password);
            cy.get(Loginselector.clickLogin).click();
            cy.get(Loginselector.messageError).should('have.text', 'Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\n');

        })

    });


    it('TC04_Verify-User Login', () => {
        cy.get('@loginData').then((data) => {
            const user = data.validCred;
            cy.get('h1').should('have.text', 'Welcome, Please Sign In!');
            cy.doLogin(user.email, user.password);
            cy.get(Loginselector.clickLogin).click();
            cy.get(Dashboardselector.logoutBtn).should('have.text', 'Log out');
            cy.get(Dashboardselector.verifyTitle).should('have.text', 'Welcome to our store');
        })

    });
}) 