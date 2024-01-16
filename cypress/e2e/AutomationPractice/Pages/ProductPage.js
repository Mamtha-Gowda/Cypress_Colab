export const ProductPage = {
    elements: {
        Search: () => cy.get('#search_product'),
        SerachButton: () => cy.get('#submit_search'),
        Results: () => cy.get('.productinfo.text-center'),
        prodct_details: () => cy.get('h2:contains("All Products")'),
        view_product: () => cy.get('a[href="/product_details/1"]'),
        firstproduct: () => cy.get('img[src="/get_product_picture/1"]'),
        addtocart: ()=> cy.get('a[class="btn btn-default add-to-cart"][data-product-id="1"]:nth-child(1)')
    }
}