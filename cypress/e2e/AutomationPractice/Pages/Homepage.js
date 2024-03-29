export const Homepage = {

    elements: {
        homepage_logo: () => cy.get('img[alt="Website for automation practice"]'),
        btn_signup: () => cy.get('a[href="/login"]'),
        LoggedInUserName: () => cy.get('a b'),
        DeleteAccount: () => cy.get('a[href="/delete_account"]'),
        TxtAccountDeleted: () => cy.get('h2 b'),
        LogOut: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        ContactUs: () => cy.get('a[href="/contact_us"]'),
        Pruducts: () => cy.get('a[href="/products"]'),
        Subscription: () => cy.get('h2:contains("Subscription")'),
        EmailAddress: () => cy.get('#susbscribe_email'),
        Submit: () => cy.get('#subscribe'),
        SubscribedMessage: () => cy.get('.alert-success'),
        products: () => cy.get('a[href="/products"]')
    }

}