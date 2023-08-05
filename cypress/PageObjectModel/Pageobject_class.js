class Pageobject_class
{
    visit_url()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }
    getEmail(email)
    {
        cy.get('#Email').clear().type(email)
        return this
    }
    getPassword(pass)
    {
        cy.get('#Password').clear().type(pass)
        return this
    }
    clickLogin()
    {
        cy.get('[type=submit]').click()
    }
}
export default Pageobject_class