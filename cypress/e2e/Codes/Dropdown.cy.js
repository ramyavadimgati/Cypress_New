///<reference types="cypress"/>
describe("Dropdown",()=>
{
    it("select_tag",()=>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").should('be.visible').select("Iraq")
        cy.get("#zcf_address_country").should('have.value','Iraq')
    })
    it("span_tag",()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Ivo').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Ivory Coast')
    })
    it.only("Autosuggested",()=>
    {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Java")
        cy.get(".suggestion-text").should('have.length','6')
        cy.get("div.suggestion-text > h3").each(($el,index,$list)=>
        {
            if($el.text() == 'JavaScript')
            {
                cy.wrap($el).click()
            }
        })
       cy.url().should('include','JavaScript')
    })

})