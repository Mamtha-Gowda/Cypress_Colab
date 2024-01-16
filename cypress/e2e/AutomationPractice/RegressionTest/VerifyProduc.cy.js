import {Homepage} from "../Pages/Homepage";
import { ProductPage } from "../Pages/ProductPage";
import { ProductDetails } from "../Pages/ProductdetailsPage";

beforeEach(()=>{
    cy.visit("./");
    Homepage.elements.homepage_logo().should('be.visible');
})

it("Verify Product" , ()=>{

Homepage.elements.products().should('be.visible').click();
ProductPage.elements.prodct_details().should('be.visible');
ProductPage.elements.view_product().should('be.visible').click();
ProductDetails.elements.productname().should('be.visible');
ProductDetails.elements.productcategory().should('be.visible');
ProductDetails.elements.productprice().should('be.visible');
ProductDetails.elements.productavailability().should('be.visible');
ProductDetails.elements.productcondition().should('be.visible');
ProductDetails.elements.productbrand().should('be.visible');

})