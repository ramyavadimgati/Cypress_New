///<reference types="cypress"/>
describe('Xpathlocators', () => 
{
    it('Count no of dresses', () => 
    {
      cy.visit('http://www.automationpractice.pl/index.php?id_category=11&controller=category')
      cy.title().should('eq','Summer Dresses - My Shop')
      cy.xpath("//*[@id='center_column']/ul/li").should("have.length","3")

   
 })
    it('Chained xpath count', () =>
     {
        cy.visit('http://www.automationpractice.pl/index.php?id_category=11&controller=category')
        cy.title().should('eq','Summer Dresses - My Shop')
        cy.xpath("//*[@id='center_column']/ul").xpath("./li").should("have.length","3")
    })
  })