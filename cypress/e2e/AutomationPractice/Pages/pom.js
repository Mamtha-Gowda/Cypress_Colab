export class POM {

    webelements ={
        homepage_logo:img[alt="Website for automation practice"]
    }

    openUrl(){
        cy.visit("/");
    }

    validatelogo(){
        cy.get(this.webelements.homepage_logo).should('be.visible');
    }
}