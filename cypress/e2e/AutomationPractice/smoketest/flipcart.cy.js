
describe("flip cart test" , ()=>{

    it("search for phones" , ()=>{

        cy.visit("https://www.flipkart.com/");
        cy.get('._2SmNnR input').type('mobiles {enter}')
        cy.wait(5000);
        cy.get('._1fQZEK .col ._25b18c ._30jeq3').each(($e1,index, $list)=>{
 
            let price = $e1.text();
            //  price = parseInt(price);
             cy.log(price);
             cy.log(index);
             cy.log($list)

             if(price>30000){
                cy.log();
                cy.log();
             }

        })
    })
})