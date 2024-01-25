export const PaymentPage = {
    elements: {
        nameoncard: () => cy.get('input[name="name_on_card"]'),
        cardnumber: () => cy.get('input[name="card_number"]'),
        cvc: () => cy.get('input[name="cvc"]'),
        expirationmonth: () => cy.get('input[name="expiry_month"]'),
        expiryyear: () => cy.get('input[name="expiry_year"]'),
        btnconfirmorder: () => cy.get('#submit'),
        confiramtion: () => cy.get('.row div > p')
    }
}