export const RegistrationPage = {

    elements: {
        txt_name: () => cy.get('input[placeholder="Name"]'),
        txt_email_address: () => cy.get('input[placeholder="Email Address"]:nth-of-type(3)'),
        btn_submit: () => cy.get('.btn.btn-default:contains("Signup")'),
        header_register: () => cy.get('.login-form'),
        r_button_mr: () => cy.get('input[value="Mr"]'),
        txt_pwd: () => cy.get('#password'),
        txt_firstname: () => cy.get('#first_name'),
        txt_lastname: () => cy.get('#last_name'),
        txt_addrs1: () => cy.get('#address1'),
        txt_state: () => cy.get('#state'),
        txt_city: () => cy.get('#city'),
        txt_zipcode: () => cy.get('#zipcode'),
        txt_mobilenumber: () => cy.get('#mobile_number'),
        btn_createaccount: () => cy.get('.btn.btn-default:contains("Create Account")'),
        txt_account_created: () => cy.get('h2 b'),
        btn_continue: () => cy.get('[data-qa="continue-button"]'),
        txt_login_to_account: () => cy.get('.login-form h2'),
        Username: () => cy.get('input[placeholder="Email Address"]:nth-of-type(2)'),
        Password: () => cy.get('input[type="password"]'),
        LoginButton: () => cy.get('.btn.btn-default:contains("Login")')
    }
}