class LoginPage {
    get loginBtn () {return cy.get('[class*="text-right"] [href="/login"]')}
    get emailInput () {return cy.get('[placeholder="email"]')}
    get passwordInput () {return cy.get('[placeholder="password"]')}
    get submitBtn () {return cy.get('[type="submit"]')}
    get brandBtn () {return cy.contains('a Brand')}
    get registerBtn () {return cy.get('a .mr-2')}
    get usernameInput () {return cy.get('[placeholder="username"]')}


    loginBrand (username, password) {
        this.loginBtn.click()
        this.brandBtn.click()
        this.emailInput.type(username)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }
}
export default new LoginPage()