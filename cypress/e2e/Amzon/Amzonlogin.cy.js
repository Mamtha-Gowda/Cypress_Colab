
import { AmazonHomePage } from "./Pages/AmazonHomePage";
import { MobilePhonePage } from "./Pages/MobilePhonePage";

before(()=>{
    cy.visit("/");

})
beforeEach(()=>{

    cy.clearCookies();
    cy.clearLocalStorage();
})

describe('Amazon Test Suit', ()=>{

it('Amazon Login', ()=>{ 
    AmazonHomePage.element.Amazonlogo().should('be.visible');
});

it('choose a phone', ()=>{
    AmazonHomePage.element.searchbox().type('mobile');
    cy.wait(2000);
    AmazonHomePage.element.suggessions().click();
    cy.wait(2000);
    MobilePhonePage.element.chkbox_samsung().click({force : true});
    MobilePhonePage.element.mobile().click();
    MobilePhonePage.element.back_to_results().click();

})


})