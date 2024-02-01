describe("Validate countries", ()=>{
    const country_code = ['/in/','/ae/','/ca/']

    it("multiple countries", ()=>{
        country_code.forEach((country)=>{
            cy.visit(`https://www.apple.com${country}`);
            cy.url().should('include',country);
            cy.verify_country(country).then((text)=>{
                cy.get('a[title="Choose your country or region"]').should('have.text',text);
            })
        
        })
        

    })
})