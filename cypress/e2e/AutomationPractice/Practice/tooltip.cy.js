describe("tool tip", ()=>{

    it.skip("tool tip" , ()=>{

        cy.visit('https://practice.expandtesting.com/tooltips');
        cy.get('#btn1').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible');
    })

    it.skip("one more",()=>{
        cy.visit('https://open.spotify.com/');
        cy.get('[aria-label="Collapse Your Library"]').trigger('mouseover');
        //cy.get('#')
    })

    it("enter",()=>{
        cy.visit("https://www.google.com/");
        //cy.get('#APjFq',{timeout:0}).type('cypress').type('{enter}');
        cy.get('#APjFq').type('cypress').type('{enter}');
    })

    it.skip("failonstatuscode", ()=>{

        // cy.request({
        //     method : 'GET',
        //     url: 'https://reqres.in/api/unknown/23',
        //     failOnStatusCode:false
        // }).then((response)=>{
        //        expect(response.status).to.be.eq(404)
        // })

        cy.request({
            method:'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode:false
        }).then((response)=>{
              expect(response.status).t.be.eq
        })
    })
})