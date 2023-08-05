///<reference types="cypress"/>
describe("Alerts",()=>
{
    it("Simple Alert",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       cy.get("#content > div > ul > li:nth-child(1) > button").click()
       cy.on('window:alert',(msg)=>
       {
            assert.equal(msg,'I am a JS Alert')
       })
       cy.get("#result").should('have.text','You successfully clicked an alert')
    })
    it("Confirm Alert",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       cy.get("#content > div > ul > li:nth-child(2) > button").click()
       cy.on('window:confirm',(msg)=>
       {
            assert.equal(msg,'I am a JS Confirm')
       })
       //cy.get("#result").should('have.text','You clicked: Ok')
       cy.on('window:confirm',()=>false)
       cy.get("#result").should('have.text','You clicked: Cancel')

    })
    it("Prompt Alert",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       cy.window().then((w)=>
       {
            cy.stub(w,'prompt').returns('welcome prompt')
       })
       cy.get("#content > div > ul > li:nth-child(3) > button").click()
    //   cy.get("#result").should('have.text','You entered: welcome prompt')
        cy.on('window:prompt',()=>false)
        cy.get("#result").should('have.text','You entered: null')
      })
    it.only("Authentication Alert",()=>
    {
        //type1:
    /*   cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{
        username:"admin",
        password:"admin"
       }})
       cy.get('div.example > p').should('contain','Congratulations!')
      */
       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
       cy.get('div.example > p').should('contain','Congratulations!')
      })
})