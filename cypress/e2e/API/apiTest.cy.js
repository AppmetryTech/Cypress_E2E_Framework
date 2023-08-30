const apiUrl = Cypress.env('apiUrl');

describe("API TEST CASE DEMO SUITE", () => {
    it("GET REQUEST", () => {
        cy.getAndVerifyApiResponse("/employees", 0)

    })

    it("POST REQUEST", () => {

        cy.fixture('employeeData.json').then((employeeData) => {
            cy.createEmployee(employeeData);
        })

    })


    it("PUT REQUEST", () => {

        const employeeIdToUpdate = 25;
        const updatedEmployeeData = {
            name: 'updatedName',
            salary: '456',
            age: '30',
        };

        cy.updateAndVerifyEmployee(employeeIdToUpdate, updatedEmployeeData);

    })


    it("DELETE REQUEST", () => {

        const deleteEndpoint = '/delete/719';
        cy.deleteAndVerify(deleteEndpoint);

    })
})