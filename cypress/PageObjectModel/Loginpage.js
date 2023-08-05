class Login
{
    setUserName(user)
    {
        cy.get("[name='username']").type(user)
    }
    setPassword(pass)
    {
        cy.get("[name='password']").type(pass)
    }
    clickLogin()
    {
        cy.get("[type='submit']").click()
    }
    verifyText(txt)
    {
        cy.get(".oxd-topbar-header-breadcrumb").should('have.text',txt)
    }
}
export default Login