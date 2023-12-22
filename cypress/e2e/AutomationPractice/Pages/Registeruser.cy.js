import { describe } from "mocha";
import { Homepage } from "./Homepage";

// beforeEach(()=>{
//     cy.clearCookies();
//     cy.clearLocalStorage();
// })

describe('First Test suite', ()=>{

    it('Register user', ()=>{
        cy.visit("/");
        Homepage.elements.homepage_logo().should('be.visible');
        Homepage.elements.btn_signup().should('be.visible');
        Homepage.elements.btn_signup().click()
    })

})