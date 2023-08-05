///<reference types="cypress"/>
import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe("MouseOperations suite",()=>
{
    it("MouseHover_test",()=>
    {
       cy.visit("https://demo.opencart.com/")
       cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").should('be.visible').click()
       cy.wait(2000)
       cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should('be.visible').click()
       cy.get("#content > h2").contains("Mac")
    })
    it("Rightclick",()=>
    {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    //   cy.get('.context-menu-one').trigger("contextmenu")
         cy.get('.context-menu-one').rightclick()
         cy.get("body > div.wy-grid-for-nav > section > div > div > div > pre:nth-child(6) > code > span:nth-child(14)").should('be.visible')
       
    })
    it("DoubleClick",()=>
    {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded("#iframeResult")
       //cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
       cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe("#iframeResult").find("#demo").should("have.text","Hello World")
    }
    )
    it("Drag and drop",()=>
    {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.wait(2000)
        cy.get("#box5").drag("#box101", {force: true})
    })
    it.only("Scrolling page",()=>
    {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
      //  cy.get(":nth-child(1) > tbody > :nth-child(62) > :nth-child(2)").scrollIntoView()
      cy.get(":nth-child(1) > tbody > :nth-child(62) > :nth-child(2)").scrollIntoView({duration:2000}).should('be.visible')
      cy.get("#footer").scrollIntoView()
        
    })

})