///<reference types="cypress"/>
import Login from '../../PageObjectModel/LoginPage_locator.js'
describe("Pageobjectsuite",()=>
{
    it("Pageobject_test",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const lp=new Login()
         lp.setUserName("Admin")
            lp.setPassword("admin123")
            lp.clickLogin()
            lp.verifyText("Dashboard")
       
      
        
    })
    it.only("Fixture_data_POM",()=>
    {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const lp=new Login()
        cy.fixture("example").then((data)=>
        {
            lp.setUserName(data.user)
            lp.setPassword(data.pass)
            lp.clickLogin()
            lp.verifyText(data.text)
        })
      
        
    })
    })