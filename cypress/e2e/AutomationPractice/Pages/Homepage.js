export const Homepage ={

    elements:{
        homepage_logo: ()=> cy.get('img[alt="Website for automation practice"]'),
        btn_signup : ()=> cy.get('a[href="/login"]')

    }
    

}