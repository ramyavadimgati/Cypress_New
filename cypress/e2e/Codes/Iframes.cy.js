///<reference types="cypress"/>
import 'cypress-iframe'
describe("Handling Iframes",()=>
{
    it("Approach 1:Iframes",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/iframe")
       const iframe=cy.get("#mce_0_ifr").its("0.contentDocument.body").should("be.visible").then(cy.wrap)
       iframe.type("{ctrl+a}{backspace}")
       iframe.type("welcome{ctrl+a}")
       cy.wait(2000)
       cy.iframe("#mce_0_ifr").get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)").click()
    })
    it("Approach 2:Custom command",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/iframe")
       const iframe=cy.getIframe("#mce_0_ifr")
       iframe.type("{ctrl+a}{backspace}")
       iframe.type("welcome{ctrl+a}")
       cy.wait(2000)
       cy.iframe("#mce_0_ifr").get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)").click()
    })
    it.only("Approach 3:Cypress iframe command",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/iframe")
       cy.frameLoaded("#mce_0_ifr")
       cy.iframe("#mce_0_ifr").clear().type("welcome{ctrl+a}")
       cy.wait(2000)
       cy.iframe("#mce_0_ifr").get("#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)").click()
    })
    
})