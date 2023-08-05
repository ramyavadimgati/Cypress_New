///<reference types="cypress"/>
describe("RadioButton,Checkboxes",()=>
{
    it("RadioButton",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should('be.visible').check().should('be.checked')
        cy.get("#female").should("be.visible").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
    })
    it.only("CheckBoxes",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#sunday").should('be.enabled').check().should("be.checked")
        cy.get("#monday").should('be.enabled').check().should("be.checked")
        cy.get("#tuesday").should('be.enabled').check().should("be.checked")
        cy.get("#sunday").uncheck().should("not.be.checked")//unchecking checkbox
        //selecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("to.be.checked")
        //Uncheck
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")
        //first ,last
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })
})