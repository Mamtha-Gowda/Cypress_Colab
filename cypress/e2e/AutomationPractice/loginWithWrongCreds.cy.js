import { Homepage } from "./Pages/Homepage";
import { RegistrationPage } from "./Pages/RegistrationPage";

describe("First Test Suite", ()=>{
   it("Login with incorrect Creds", ()=>{
    cy.visit("/");
        Homepage.elements.homepage_logo().should('be.visible');
        Homepage.elements.btn_signup().click();
        RegistrationPage.elements.txt_login_to_account().should('have.text', 'Login to your account');
        cy.LoginWithWrongCreds();
        RegistrationPage.elements.errorText().should('have.text', 'Your email or password is incorrect!');
   })
})