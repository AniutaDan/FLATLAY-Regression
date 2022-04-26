import Data from '../../../data/base.data.json'
import LoginPage from '../../../fixtures/Creator/login/login.page'

describe('Login', () => {
  beforeEach(() => {
    cy.visit(Data.baseUrl)
  })
  it('Should show required fields messages upon click on Login with no email and password, FL-4', () => {
    LoginPage.loginBtn.click()
    LoginPage.submitBtn.click()
    cy.contains('Email address is required')
    cy.contains('Password is required')
  })
})