import { Homepage } from "../Pages/Homepage";
import { ProductPage } from "../Pages/ProductPage";


beforeEach(() => {
    cy.visit("./");
    Homepage.elements.homepage_logo().should('be.visible');
})

describe("Test suite", () => {
    it("Add products to cart", () => {
        Homepage.elements.products().should('be.visible').click();
        ProductPage.elements.firstproduct().should('be.visible');
        ProductPage.elements.firstproduct().invoke('show');
      // ProductPage.elements.addtocart().should('be.visible').click({force:true})
    })
})