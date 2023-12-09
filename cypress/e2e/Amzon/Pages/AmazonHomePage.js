export const AmazonHomePage ={
    element : {
           Amazonlogo : () => cy.get('a[aria-label="Amazon"]'),
           searchbox : ()=> cy.get('#twotabsearchtextbox'),
           sugessions_container : ()=> cy.get('.s-suggestion.s-suggestion-ellipsis-direction:first-of-type'),
           suggessions :() => cy.get('div[aria-label="mobile phones"]')


    }
}