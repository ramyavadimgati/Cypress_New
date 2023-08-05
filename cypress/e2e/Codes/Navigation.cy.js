///<reference types="cypress"/>
describe("Navigation_suite",()=>
{
    it("Navigation Test",()=>
    {
       cy.visit("https://demo.nopcommerce.com/")
       cy.get(".ico-register").click()
       cy.url().should('include','register')
       cy.go("back")
       cy.url().should('eq','https://demo.nopcommerce.com/')
       cy.go("forward")
       cy.url().should('include','register')
       cy.wait(3000)
       cy.reload()
    })
})