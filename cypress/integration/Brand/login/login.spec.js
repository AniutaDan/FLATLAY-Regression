import Data from '../../../data/base.data.json'
import LoginPage from '../../../fixtures/Brand/login/login.page'
import BrandHomePage from '../../../fixtures/Brand/home/home.page'
import credentials from '../../../data/credentials.json'

describe('Login', () => {
  beforeEach(() => {
    cy.visit(Data.baseUrl)
  })

  it("Login as a Brand", () => {
    LoginPage.loginBrand(credentials.emailBrand, credentials.passwordBrand);
    cy.contains('Home',{timeout: 60000})
  })

  it("LogOut as a Brand", () => {
    LoginPage.loginBrand(credentials.emailBrand, credentials.passwordBrand);
    cy.contains('Home',{timeout: 60000})
    BrandHomePage.LogoutBrand();
    cy.contains('Login',{timeout:60000});
  })
  
  it('"Enter a valid email address" message upon typing invalid email into email text field, FL-267', () => {
    const wrongEmail = 'test@gmail'
    LoginPage.loginBtn.click()
    LoginPage.emailInput.type(`${wrongEmail}{enter}`)
    cy.contains('Enter a valid email address')
  })
})