export const ContactUsPage = {

    elements: {

        TextGetInTouch: () => cy.get("h2.title.text-center:contains('Get In Touch')"),
        Boxes : () => cy.get(".form-group.col-md-6"),
        Subject : () => cy.get('input[placeholder="Subject"]'),
        Message : () => cy.get('textarea[placeholder="Your Message Here"]'),
        ChooseFile : ()=> cy.get('input[type="file"]'),
        Submit : () => cy.get('input[type="submit"]'),
        SuccessMessage : () => cy.get('.status.alert.alert-success:contains("Success! Your details have been submitted successfully.")'),
        HomeButton : () => cy.get('.fa.fa-angle-double-left')
    }

}
