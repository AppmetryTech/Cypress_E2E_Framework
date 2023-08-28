describe("",()=>{
    beforeEach("Visit Application", () => {
        cy.visit("/")
    })

    it("Login with valid credentials and verify successful login.",()=>{

        cy.clickonButton("login");

    })
})