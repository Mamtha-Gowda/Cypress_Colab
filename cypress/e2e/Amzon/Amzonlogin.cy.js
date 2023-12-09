
import { AmazonHomePage } from "./Pages/AmazonHomePage";
import { MobilePhonePage } from "./Pages/MobilePhonePage";

beforeEach(()=>{

    cy.clearCookies();
    cy.clearLocalStorage();

})

describe('Amazon Test Suit', ()=>{

it('Amazon Login', ()=>{

    cy.visit("https://www.amazon.com/");
    AmazonHomePage.element.Amazonlogo().should('be.visible');
    AmazonHomePage.element.searchbox().type('mobile');
    cy.wait(2000);
    AmazonHomePage.element.suggessions().click();
    cy.wait(2000);
    MobilePhonePage.element.chkbox_samsung().click({force : true});
    MobilePhonePage.element.mobile().click();

})

})