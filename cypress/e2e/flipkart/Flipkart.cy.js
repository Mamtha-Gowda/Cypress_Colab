/// <reference types="Cypress"/>
import { FlipkartHomePage } from "./pages/FlipkartHomePage";

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    Cypress.Cookies.defaults({
        preserve: "session_id"
      })
});

describe('Flipkart Test Suite', () => {
    it('Should Login to flipkart', () => {
        cy.visit('https://www.flipkart.com/');
        FlipkartHomePage.elements.btnCloseLoginWindow().click();
        cy.url().should('contain','flipkart')
        FlipkartHomePage.elements.txtSearchProducts().type('Pixel 7a');
        FlipkartHomePage.elements.btnSearchProducts().click();
    });
});