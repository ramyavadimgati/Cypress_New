///<reference types="cypress"/>
describe("Custom command suite",()=>
{
    it("Handling links",()=>
    {
       cy.visit("https://demo.nopcommerce.com/")
       cy.label("HTC One M8 Android L 5.0 Lollipop")
       cy.get(".product-name").should("have.text","HTC One M8 Android L 5.0 Lollipop")
    })
    it("OverwriteExistingcommand",()=>
    {
         cy.visit("https://demo.nopcommerce.com/")
       cy.label("HTC One M8 ANDROID L 5.0 LOLLIPOP")
       cy.get(".product-name").should("have.text","HTC One M8 Android L 5.0 Lollipop")
    })
    it.only("Login_custom",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login("Admin","admin123")
        cy.url().should('contain','dashboard')
    })

})