export const ProductPage = {
    elements: {
        Search: () => cy.get('#search_product'),
        SerachButton: () => cy.get('#submit_search'),
        Results: () => cy.get('.productinfo.text-center')
    }
}