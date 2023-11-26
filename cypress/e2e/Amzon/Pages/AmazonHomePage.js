export const AmazonHomePage ={
    element : {
           Amazonlogo : () => cy.get('a[aria-label="Amazon"]'),
           searchbox : ()=> cy.get('#twotabsearchtextbox')

    }
}