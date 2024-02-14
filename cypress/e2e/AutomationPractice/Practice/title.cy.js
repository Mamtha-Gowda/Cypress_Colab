describe("title test", ()=>{

    it('title', ()=>{
  
        cy.visit("https://www.amazon.com/");
         let title = cy.title();
        cy.log(title);
        let url = cy.url();
        cy.log(url);
    })
})