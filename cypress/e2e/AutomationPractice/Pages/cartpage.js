export const CartPage = {
    elements: {
        quantity: () => cy.get('.disabled'),
        proceedtocheckout: () => cy.get('.col-sm-6 > .btn'),
        placeorder: () => cy.get('.btn.btn-default.check_out')
    }
}