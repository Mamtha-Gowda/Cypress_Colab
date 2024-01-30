
describe("Assertions", ()=>{

    it.skip("explicit",()=>{

        cy.visit("https://example.cypress.io/");
        expect(true).to.be.true;
        let name = 'cypress';

       expect(name).to.be.equal('cypress');
       assert.equal(7,7,'Not Equal')

    })

    it("take screenshot", ()=>{
        cy.visit("https://example.cypress.io/");
        //cy.screenshot();
        //cy.screenshot("test1.png");
        cy.get('#utilities').should('be.visible');
        cy.xpath('(//div[@id="utilities"])[1]').should('be.visible');
    })
})