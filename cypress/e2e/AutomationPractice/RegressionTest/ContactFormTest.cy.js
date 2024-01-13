import { Homepage } from "../Pages/Homepage";
import { ContactUsPage } from "../Pages/ContactUsPage"
import { ProductPage } from "../Pages/ProductPage";

let userdata;
before(() => {
    cy.fixture("AutomationPractice").then((data) => {
        userdata = data;
    })

})

beforeEach(() => {
    cy.visit("./");
    Homepage.elements.homepage_logo().should('be.visible');
})


describe("Test Suite", () => {

    it("Verify Contact US Page", () => {
        Homepage.elements.ContactUs().click();
        ContactUsPage.elements.TextGetInTouch().should('be.visible');
        ContactUsPage.elements.Boxes().should('have.length', 2);
        ContactUsPage.elements.Boxes().eq(0).type(userdata.Firstname);
        ContactUsPage.elements.Boxes().eq(1).type(userdata.emailid);
        ContactUsPage.elements.Subject().type("Subject");
        ContactUsPage.elements.Message().type("message");
        ContactUsPage.elements.ChooseFile().selectFile("C:\\Users\\mamat\\Desktop\\cypress.txt");
        ContactUsPage.elements.Submit().click();
        ContactUsPage.elements.SuccessMessage().should('be.visible');
        ContactUsPage.elements.HomeButton().click();
        Homepage.elements.homepage_logo().should('be.visible');
    })


    it("View Products", () => {
        Homepage.elements.Pruducts().should('be.visible').click();
        ProductPage.elements.Search().type(userdata.productname);
        ProductPage.elements.SerachButton().click();
        ProductPage.elements.Results().find('p').should('have.length', 14);
        ProductPage.elements.Results().find('p').each(($e1, index, $list) => {

            let productname = $e1.text();
            expect(productname).to.match(/top|shirt/i);
        })

    })

})