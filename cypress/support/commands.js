import { enterRegistrationDetails } from './utilities/registrationUtils';
import { doLogin } from './utilities/loginUtils';
import Loginselector from '../support/selectors/loginPageSelectors'
const apiUrl = Cypress.env('apiUrl');



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    cy.session('mySession', () => {
        cy.fixture('loginData.json').as('loginData');
        cy.visit("/login?returnUrl=%2F");
        cy.get('@loginData').then((data) => {
            const user = data.validCred;
            cy.get('h1').should('have.text', 'Welcome, Please Sign In!');
            cy.doLogin(user.email, user.password);
            cy.get(Loginselector.clickLogin).click();
        });

    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillRegistrationForm', enterRegistrationDetails);

Cypress.Commands.add('doLogin', doLogin);

Cypress.Commands.add('addToCartByProductTitle', (productTitle) => {
    cy.get('.product-title a')
        .contains(productTitle)
        .should('exist')
        .parents('.product-item')
        .within(() => {
            cy.get('.product-box-add-to-cart-button').click();
        });
});


Cypress.Commands.add('getAndVerifyApiResponse', (endpoint, employeeIndex) => {
    //const apiUrl = Cypress.env('apiUrl');
    const apiTestUrl = apiUrl + endpoint;

    cy.request({
        method: 'GET',
        url: apiTestUrl,
    }).then((response) => {
        expect(response.status).to.equal(200);

        cy.fixture('apiData.json').then((employeeData) => {
            const selectedEmployee = response.body.data[employeeIndex];
            const expectedEmployee = employeeData.data[employeeIndex];
            expect(selectedEmployee.employee_name).to.equal(expectedEmployee.employee_name);
            expect(selectedEmployee.employee_salary).to.equal(expectedEmployee.employee_salary);

        });

    });
});

Cypress.Commands.add('createEmployee', (employeeData) => {
  //  const apiUrl = Cypress.env('apiUrl');
    const apiCreateUrl = apiUrl + '/create';

    cy.request({
        method: 'POST',
        url: apiCreateUrl,
        body: employeeData,
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');

        const responseData = response.body.data;
        expect(responseData.name).to.equal(employeeData.name);
        expect(responseData.salary).to.equal(employeeData.salary);
        expect(responseData.age).to.equal(employeeData.age);
    });
});

Cypress.Commands.add('updateAndVerifyEmployee', (employeeId, updatedData) => {
   // const apiUrl = Cypress.env('apiUrl');
    const apiUpdateUrl = apiUrl + `/update/${employeeId}`;
  
    cy.request({
      method: 'PUT',
      url: apiUpdateUrl,
      body: updatedData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
  
     
      const responseData = response.body.data;
      expect(responseData.name).to.equal(updatedData.name);
      expect(responseData.salary).to.equal(updatedData.salary);
      expect(responseData.age).to.equal(updatedData.age);
  
      
    });
  });

  Cypress.Commands.add('deleteAndVerify', (endpoint) => {
   // const apiUrl = Cypress.env('apiUrl');
    const apiDeleteUrl = apiUrl + endpoint;
  
    cy.request({
      method: 'GET',
      url: apiDeleteUrl,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('successfully! deleted Records');
    });
  });
  
  
