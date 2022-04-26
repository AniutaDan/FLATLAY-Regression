class LoginPage {
    get loginBtn () {return cy.get('[class*="text-right"] [href="/login"]')}
    get emailInput () {return cy.get('[placeholder="email"]')}
    get passwordInput () {return cy.get('[placeholder="password"]')}
    get submitBtn () {return cy.get('[type="submit"]')}
    get creatorBtn () {return cy.contains('a Creator')}
    get registerBtn () {return cy.get('a .mr-2')}
    get usernameInput () {return cy.get('[placeholder="username"]')}

    // Creator Login helper method to avoid code duplication
    loginCreator (username, password) {
        this.loginBtn.click()
      
        this.emailInput.type(username)

        this.passwordInput.type(password)

        this.submitBtn.click()
    }
}

// Allow other files to import it
export default new LoginPage()