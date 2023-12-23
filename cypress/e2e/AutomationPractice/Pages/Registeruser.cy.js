
import { Homepage } from "./Homepage";
import { RegistrationPage } from "./RegistrationPage";

// beforeEach(()=>{
//     cy.clearCookies();
//     cy.clearLocalStorage();
// })

describe('First Test suite', ()=>{

       it('Register user', ()=>{
        cy.visit("/");
        Homepage.elements.homepage_logo().should('be.visible');
        Homepage.elements.btn_signup().should('be.visible');
        Homepage.elements.btn_signup().click();
        RegistrationPage.elements.txt_name().should('be.visible');
        cy.Generate_Username();
        //RegistrationPage.elements.txt_name().type(uname);
        RegistrationPage.elements.txt_email_address().type("arereeeer@gmail.com");
        RegistrationPage.elements.btn_submit().click();
        RegistrationPage.elements.header_register().should('be.visible');
        RegistrationPage.elements.r_button_mr().should('be.visible');
        RegistrationPage.elements.r_button_mr().click();
        RegistrationPage.elements.txt_pwd().type("random@2023");
        RegistrationPage.elements.txt_firstname().type("random");
        RegistrationPage.elements.txt_lastname().type("name");
        RegistrationPage.elements.txt_addrs1().type("abc");
        RegistrationPage.elements.txt_state().type("Karnataka");
        RegistrationPage.elements.txt_city().type("Mysore");
        RegistrationPage.elements.txt_zipcode().type("123456");
        RegistrationPage.elements.txt_mobilenumber().type(123456789);
        RegistrationPage.elements.btn_createaccount().click();
        RegistrationPage.elements.txt_account_created().should('have.text','Account Created!');
        RegistrationPage.elements.btn_continue().click();

    })

})