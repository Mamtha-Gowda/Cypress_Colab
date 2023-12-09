export const MobilePhonePage ={

element:{

    chkbox_samsung : ()=> cy.get('li[aria-label="SAMSUNG"] label input[type="checkbox"]'),
    mobile : ()=> cy.get('.a-size-medium:contains("SAMSUNG Galaxy A03 Core")')
}



}