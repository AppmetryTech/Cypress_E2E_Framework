export const clickonButton = (buttonName) => {
    cy.get("div[class='nav float-end'] div[class='dropdown']").click();
    cy.contains(buttonName).click();
};