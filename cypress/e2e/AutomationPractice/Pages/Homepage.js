export const Homepage = {

    elements: {
        homepage_logo: () => cy.get('img[alt="Website for automation practice"]'),
        btn_signup: () => cy.get('a[href="/login"]'),
        LoggedInUserName: () => cy.get('a b'),
        DeleteAccount: () => cy.get('a[href="/delete_account"]'),
        TxtAccountDeleted: () => cy.get('h2 b'),
        LogOut: () => cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
}