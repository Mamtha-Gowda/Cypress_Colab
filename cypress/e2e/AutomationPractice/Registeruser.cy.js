
import { Homepage } from "./Pages/Homepage";
import { RegistrationPage } from "./Pages/RegistrationPage";

let userdata;
before(()=>{
cy.fixture("AutomationPractice").then((data)=>{
    userdata=data;
})
})


describe('First Test suite', ()=>{
       it('Register user', ()=>{
        cy.visit("/");
        Homepage.elements.homepage_logo().should('be.visible');
        Homepage.elements.btn_signup().click();
        RegistrationPage.elements.txt_name().should('be.visible');
        cy.Generate_Username();
        RegistrationPage.elements.btn_submit().click();
        RegistrationPage.elements.header_register().should('be.visible');
        RegistrationPage.elements.r_button_mr().should('be.visible').click();
        RegistrationPage.elements.txt_pwd().type(userdata.Password);
        RegistrationPage.elements.txt_firstname().type(userdata.Firstname);
        RegistrationPage.elements.txt_lastname().type(userdata.Lastname);
        RegistrationPage.elements.txt_addrs1().type(userdata.addr1);
        RegistrationPage.elements.txt_state().type(userdata.state);
        RegistrationPage.elements.txt_city().type(userdata.City);
        RegistrationPage.elements.txt_zipcode().type(userdata.Zipcode);
        RegistrationPage.elements.txt_mobilenumber().type(userdata.MobileNumber);
        RegistrationPage.elements.btn_createaccount().click();
        RegistrationPage.elements.txt_account_created().should('have.text','Account Created!');
        RegistrationPage.elements.btn_continue().click();
        //verify username
        debugger;
       cy.VerifyUSerName();
       Homepage.elements.DeleteAccount().click();
       Homepage.elements.TxtAccountDeleted().should('have.text','Account Deleted!');
    })

})