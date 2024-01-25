export const ProductDetails = {
    elements: {
        productname: () => cy.get('.product-information h2'),
        productcategory: () => cy.get('.product-information p'),
        productprice: () => cy.get('span:contains("Rs.")'),
        productavailability: () => cy.contains("Availability:"),
        productcondition: () => cy.get('b:contains("Condition:")'),
        productbrand: () => cy.get('b:contains("Brand:")'),
        addtocart: () => cy.get('.btn.btn-default.cart'),
        quantitybox: () => cy.get('#quantity'),
        viewcart: () => cy.get('p a[href="/view_cart"]')
    }
}