export const FlipkartHomePage = {
    elements: {
        btnCloseLoginWindow: () => cy.get("span:contains('✕')"),
        txtSearchProducts: () => cy.get('input[title*="Search for Products"]'),
        btnSearchProducts: ()=> cy.get('button[title*="Search for Products"]')
    }
};