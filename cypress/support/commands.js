// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import { RegistrationPage } from '../e2e/AutomationPractice/Pages/RegistrationPage'
import { Homepage } from '../e2e/AutomationPractice/Pages/Homepage';
import testdata from '../fixtures/AutomationPractice.json'

var username;
let email;
Cypress.Commands.add('Generate_Username', () => { 
   username = generateString(8);
   email =username+"@gmail.com"
   RegistrationPage.elements.txt_name().type(username);
   RegistrationPage.elements.txt_email_address().type(email);
   
})

Cypress.Commands.add('VerifyUSerName', ()=>{
   Homepage.elements.LoggedInUserName().should('have.text',username);

})

Cypress.Commands.add('LoginToYourAccount', ()=>{
RegistrationPage.elements.Username().type(email);
RegistrationPage.elements.Password().type(testdata.Password);
RegistrationPage.elements.LoginButton().click();
})

// program to generate random strings

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
   let result = ' ';
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result;
}


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })