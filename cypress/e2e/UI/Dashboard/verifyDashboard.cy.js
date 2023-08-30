import Loginselector from '../../../support/selectors/loginPageSelectors'
describe("Verify Dashboard Elements", () => {
    before("Login to application", () => {
        cy.login();
    })

    it('TC01_Verify Dashboard Elements', () => {
        cy.visit("/")
        cy.get('.notmobile > :nth-child(1) > [href="/computers"]').should('have.text', 'Computers ');
        cy.get('.notmobile > :nth-child(2) > [href="/electronics"]').should('have.text', 'Electronics ');
        cy.get('.notmobile > :nth-child(3) > [href="/apparel"]').should('have.text', 'Apparel ');
        cy.get('.notmobile > :nth-child(4) > a').should('have.text', 'Digital downloads ');
        cy.get('.notmobile > :nth-child(5) > a').should('have.text', 'Books ');
        cy.get('.notmobile > :nth-child(6) > a').should('have.text', 'Jewelry ');
        cy.get('.notmobile > :nth-child(7) > a').should('have.text', 'Gift Cards ');
        cy.get('.notmobile > :nth-child(1) > .sublist > :nth-child(1) > a').should('have.text', 'Desktops ');
        cy.get('.notmobile > :nth-child(1) > .sublist > :nth-child(2) > a').should('have.text', 'Notebooks ');
        cy.get('.notmobile > :nth-child(1) > .sublist > :nth-child(3) > a').should('have.text', 'Software ');
        cy.get('.header-logo > a > img').should('be.visible');
        cy.get(':nth-child(1) > .category-item > .title > a').should('be.visible');
        cy.get(':nth-child(2) > .category-item > .picture > a > img').should('be.visible');
        cy.get(':nth-child(3) > .category-item > .picture > a > img').should('be.visible');

    });

    it("TC02_Verify Add to cart product", () => {
        cy.visit("/");
        cy.addToCartByProductTitle("HTC One M8 Android L 5.0 Lollipop");
        cy.get('.bar-notification').should('have.text', 'The product has been added to your shopping cart');
        cy.get('.close').click();
        // cy.get('.cart-qty').click();
        //cy.get('.header-logo > a > img').click();
        cy.get('.count > a').should('have.text', '1 item(s)');

        cy.get("#topcartlink").trigger('mouseover');

        cy.get('.buttons > .button-1').click();
        cy.get('tbody > tr > .sku').click();
        cy.get('.sku-number').should('have.text', 'M8_HTC_5L');

        cy.get('.product-picture > a > img').should('be.visible');
        cy.get('tbody > tr > .product').click();
        cy.get('.product-name').should('have.text', 'HTC One M8 Android L 5.0 Lollipop');

        cy.get('.product-unit-price').should('have.text', '$245.00');

        cy.get('.qty-input').should('have.value', '1');

        cy.get('.product-subtotal').should('have.text', '$245.00');
        cy.get('tbody > tr > .remove-from-cart').click();
        cy.get('h1').click();
        cy.get('h1').should('have.text', 'Shopping cart');

    })





})