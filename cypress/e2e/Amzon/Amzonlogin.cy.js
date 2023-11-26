
import { AmazonHomePage } from "./Pages/AmazonHomePage";

beforeEach(()=>{

    cy.clearCookies();
    cy.clearLocalStorage();

})

describe('Amazon Test Suit', ()=>{

it('Amazon Login', ()=>{

    cy.visit("https://www.amazon.com/");
   // AmazonHomePage.element.Amazonlogo.should('be.visible');

})

})