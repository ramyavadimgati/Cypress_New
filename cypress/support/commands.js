// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
Cypress.Commands.add('login',(email,password)=>
{
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear().type(email)
    cy.get('#Password').clear().type(password)
    cy.get('[type=submit]').click()
   
})
Cypress.Commands.add('getIframe',(id)=>
{
    return cy.get(id).its("0.contentDocument.body").should("be.visible").then(cy.wrap)
})
//custom command to click by label
Cypress.Commands.add('label',(link)=>
{
    cy.get("a").contains(link).click()
}
)
//custom command to overwrite contains method to disable casesensitive option
Cypress.Commands.overwriteQuery(
    "contains",
    function (contains, filter, text, userOptions = {}) {
  
      // This is parameter resolution from Cypress v12.7.0 source
      if (Cypress._.isRegExp(text)) {
        // .contains(filter, text)
        // Do nothing
      } else if (Cypress._.isObject(text)) {
        // .contains(text, userOptions)
        userOptions = text
        text = filter
        filter = ''
      } else if (Cypress._.isUndefined(text)) {
        // .contains(text)
        text = filter
        filter = ''
      }
  
      userOptions.matchCase = false;
  
      let contains0 = contains.bind(this)    // this line fixes the error
  
      return contains0(filter, text, userOptions)
    }
  )
  Cypress.Commands.add("login",(email,pass)=>
  {
    cy.get("[name='username']").type("Admin")
            cy.get("[name='password']").type("admin123")
            cy.get("[type='submit']").click()
  })