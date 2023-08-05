///<reference types="cypress"/>
describe("Screenshot_video",()=>
{
    it("Screenshot_test",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //To take screenshot of the page
        cy.get('.orangehrm-login-slot-wrapper').screenshot("dashboard")
        //To take screenshot of specific element
        cy.get('.orangehrm-login-branding').screenshot("logo")
    })
    it.only("Screenshot_Video_CLI",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("ul[class='top-menu notmobile']>li:nth-child(1)").click()

    })
})