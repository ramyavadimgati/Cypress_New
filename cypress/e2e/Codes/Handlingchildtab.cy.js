///<reference types="cypress"/>
describe("Child Tab",()=>
{
    it("Child Tab test",()=>
    {
        
       cy.visit("https://the-internet.herokuapp.com/windows")
       //Removing Tartet Attribute
       cy.get(".example > a").invoke("removeAttr","target").click()
       cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new")

    })
    it("Approach 2:",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example > a").then((attr)=>
        {
            let url=attr.prop('href')
            cy.visit(url)
        })
        cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new")

    })
})