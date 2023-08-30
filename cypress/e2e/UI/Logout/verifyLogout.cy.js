import Loginselector from '../../../support/selectors/loginPageSelectors'
describe("Verify Logout", () => {
    beforeEach("Login to application", () => {
               cy.login();
    })

    it("TC01_Verify Logout Button visible", () => {
        cy.visit("/")
        cy.get(".ico-logout").contains("Log out");

    })

    it("TC02_Verify Logout Button visible", () => {
        cy.visit("/")
        cy.get(".ico-logout").click();
        cy.get(".ico-login").contains("Log in");

    })
})