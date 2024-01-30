import { Homepage } from "../Pages/Homepage";
import { ProductPage } from "../Pages/ProductPage";
import { ProductDetails } from "../Pages/ProductdetailsPage";
import { CartPage } from "../Pages/cartpage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { PaymentPage } from "../Pages/PaymentPage"

let userdata;
before(() => {
    cy.fixture("AutomationPractice").then((data) => {
        userdata = data;
    })
})


beforeEach(() => {
        cy.Loginwithsession();
        cy.visit("./");
})

describe("Test suite", () => {
    it("Add products to cart", () => {
        Homepage.elements.products().should('be.visible').click();
        ProductPage.elements.prodct_details().should('be.visible');
        ProductPage.elements.view_product().should('be.visible').click();
        ProductDetails.elements.addtocart().click();
    })

    it("Increase product quantity", () => {
        Homepage.elements.products().should('be.visible').click();
        ProductPage.elements.prodct_details().should('be.visible');
        ProductPage.elements.view_product().should('be.visible').click();
        ProductDetails.elements.quantitybox().click();
        ProductDetails.elements.quantitybox().clear({ force: true });
        ProductDetails.elements.quantitybox().type(1);
        ProductDetails.elements.addtocart().click();
        ProductDetails.elements.viewcart().click();
        CartPage.elements.quantity().should('be.visible');
        CartPage.elements.proceedtocheckout().click();
        CartPage.elements.placeorder().scrollIntoView();
        CartPage.elements.placeorder().click({ force: true });

        //enter payment details
        PaymentPage.elements.nameoncard().type(userdata.nameoncard);
        PaymentPage.elements.cardnumber().type(userdata.cardnumber);
        PaymentPage.elements.cvc().type(userdata.cvc);
        PaymentPage.elements.expirationmonth().type(userdata.expirymonth);
        PaymentPage.elements.expiryyear().type(userdata.expiryyear);
        PaymentPage.elements.btnconfirmorder().click();
        PaymentPage.elements.confiramtion().should('be.visible');
        PaymentPage.elements.confiramtion().should('have.text', "Congratulations! Your order has been confirmed!");
    })
})