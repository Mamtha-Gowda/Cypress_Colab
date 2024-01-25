import { Homepage } from "../Pages/Homepage";
import { RegistrationPage } from "../Pages/RegistrationPage";

describe('test session', () => {

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit("./");
            Homepage.elements.btn_signup().click();
            RegistrationPage.elements.txt_login_to_account().should('have.text', 'Login to your account');
            RegistrationPage.elements.Username().type("DX7976ME@gmail.com");
            RegistrationPage.elements.Password().type("random@2023");
            RegistrationPage.elements.LoginButton().click();
        })
    })

    it('login1', () => {
        cy.log('login1');
    })

    it('login2', () => {
         cy.log('login2');
    })

})