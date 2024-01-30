describe("Assertions", ()=>{

    it("take screenshot", ()=>{
        cy.visit('/');
        // cy.log(Cypress.env("username"));
        // cy.log(Cypress.env("password"));
        cy.log(Cypress.env("prod_url"));

    })

})