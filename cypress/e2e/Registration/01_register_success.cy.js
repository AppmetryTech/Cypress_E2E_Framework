

describe('Register - Successful Scenarios', () => {
    beforeEach("Visit Application", () => {
        cy.visit("/")
    })

    it.only('Successfully registers a new user', () => {
        cy.clickonButton("Register");
        cy.fixture('registrationData').then((data) => {
            const user = data.validUser;
            cy.fillRegistrationForm(user.firstName, user.lastName, user.email, user.password);
        });
        cy.get(".float-end > .btn").click();
        cy.wait(20000);
        //cy.contains("Your Account Has Been Created!");
    });

    it('Registers a user with valid data including optional fields', () => {
        cy.clickonButton("Register");
        cy.fixture('registrationData').then((data) => {
            const user = data.invalidUser;
            cy.fillRegistrationForm(user.firstName, user.lastName, user.email, user.password);
        });
        cy.get(".float-end > .btn").click();
        cy.verifyAlert("Warning: E-Mail Address is already registered!");

    });

});
