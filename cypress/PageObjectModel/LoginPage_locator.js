class Login
{
    txtuser="[name='username']"
    txtpass="[name='password']"
    txtlogin="[type='submit']"
    txtverify=".oxd-topbar-header-breadcrumb"
    setUserName(user)
    {
        cy.get(this.txtuser).type(user)
    }
    setPassword(pass)
    {
        cy.get(this.txtpass).type(pass)
    }
    clickLogin()
    {
        cy.get(this.txtlogin).click()
    }
    verifyText(txt)
    {
        cy.get(this.txtverify).should('have.text',txt)
    }
}
export default Login