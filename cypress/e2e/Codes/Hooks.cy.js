///<reference types="cypress"/>
describe("Hooks_concept",()=>
{
   
       before('Beforeblock',()=>
       {
            cy.log("This is before block")
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("[name='username']").type("Admin")
            cy.get("[name='password']").type("admin123")
            cy.get("[type='submit']").click()
       })
       after('Afterblock',()=>
       {
            cy.log("This is a after block")
            cy.wait(3000)
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       })
       beforeEach('BeforeEach_block',()=>
       {
          cy.log("This is a beforeeach block")
          cy.url().should('contain','dashboard')
       })
       afterEach('AfterEach_block',()=>
       {
        cy.log("This is a aftereach block")
        cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)").should('have.text','Logout').click()
       })
       it("Test",()=>
       {
            cy.get(".oxd-userdropdown-name").click()
       })
    })