describe("Assertions",()=>
{
    it("Implicit Assertion",()=>
    {
        //keywords:should, and
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("img[alt='company-branding']").should("be.visible")
        cy.url().should("include","orangehrmlive").and ("contain","login").and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").should("include","demo")
        //check no of links
        cy.xpath("//a").should("have.length","5")
        //check passed value
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin').should('have.value','admin')
    })
    it.only("Explicit Assertion",()=>
    {
        //keywords:expect(BDD), assert(TDD)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()
        let exp_name="Paul Collings"
        cy.get(".oxd-userdropdown-name").then((user)=>
        {
             //expect BDD STYLE
             let name=user.text()
            expect(name).to.equal(exp_name)
            expect(name).to.not.equal("Paul")
            //assert TDD STYLE
            assert.equal(name,exp_name)
            assert.notEqual(name,"Paul")

        })
        
        
       
    })
})