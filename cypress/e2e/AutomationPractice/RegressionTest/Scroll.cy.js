
import { Homepage } from "../Pages/Homepage";

let userdata;
let expectedmessage ="You have been successfully subscribed!"
before(() => {
    cy.fixture("AutomationPractice").then((data) => {
        userdata = data;
    })
})


beforeEach(() => {
    cy.visit("./");
    Homepage.elements.homepage_logo().should('be.visible');
})


describe('Test Suite', () => {

    it('Verify Subscription', () => {

        cy.scrollTo('bottom');
        cy.scrollTo('top');
        cy.get('.searchform').scrollIntoView();
        Homepage.elements.Subscription().should('be.visible');
        Homepage.elements.EmailAddress().should('be.visible');
        Homepage.elements.EmailAddress().type(userdata.emailid);
        Homepage.elements.Submit().click();
        Homepage.elements.SubscribedMessage().should('be.visible');
        Homepage.elements.SubscribedMessage().should('have.text',expectedmessage);

    })

})