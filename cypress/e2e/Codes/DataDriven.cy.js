///<reference types="cypress"/>
describe("DataDrivenTest",()=>
{
    let userdata
    beforeEach("Data_load",()=>
    {
        cy.fixture("example").then((data)=>
        {
            userdata=data
        })
    })
    it.skip("Fixtures_data",()=>
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.fixture("example").then((data)=>
       {
        cy.get("[name='username']").type(userdata.user)
        cy.get("[name='password']").type(userdata.pass)
        cy.get("[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb").should('have.text','Dashboard')
       })
    })
    it("Commondata:case1",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type(userdata.user)
        cy.get("[name='password']").type(userdata.pass)
        cy.get("[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb").should('have.text',userdata.text)
    })
    it("Commondata:case2",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type(userdata.user)
        cy.get("[name='password']").type(userdata.pass)
        cy.get("[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb").should('have.text',userdata.text)
    })
    it.only("DataDrivertest",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("multipledatas").then((data)=>
        {
            data.forEach((data_array)=>
            {
                cy.get("[name='username']").type(data_array.user)
               cy.get("[name='password']").type(data_array.pass)
               cy.get("[type='submit']").click()
               if(data_array.user=="Admin" && data_array.pass=="admin123")
               {
                 cy.get(".oxd-topbar-header-breadcrumb").should('have.text',data_array.text)
                 cy.get(".oxd-userdropdown-name").click()
                 cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)").should('have.text','Logout').click()
                }
               
               else
               {
                cy.get("div[class='oxd-alert-content oxd-alert-content--error']>p").should('have.text',data_array.text)
               }
               cy.wait(3000)
            })
        })
    })
   
})