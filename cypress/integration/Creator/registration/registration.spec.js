import Data from '../../../data/base.data.json'
import Credentials from '../../../data/credentials.json'
import LoginPage from '../../../fixtures/Creator/login/login.page'

describe('Registration', () => {
    beforeEach(() => {
      cy.visit(Data.baseUrl)
    })
  
    it('User should not be able to register if the email is already existing, FL-65', () => {
      LoginPage.registerBtn.click()
      LoginPage.usernameInput.type(Credentials.usernameCreator)
      LoginPage.emailInput.type(Credentials.emailCreator)
      LoginPage.passwordInput.type(Credentials.passwordCreator)
      cy.contains('Email is already registered')
    })

    it('User should not be able to register with no password, FL-72', () => {
        LoginPage.registerBtn.click()
        LoginPage.usernameInput.type(Credentials.usernameCreator)
        LoginPage.emailInput.type(Credentials.newEmail)
        LoginPage.submitBtn.click()
        cy.contains('Password is required')
      })

    it('User should not be able to register with no username, FL-73', () => {
        LoginPage.registerBtn.click()
        LoginPage.emailInput.type(Credentials.newEmail)
        LoginPage.passwordInput.type(Credentials.passwordCreator)
        LoginPage.submitBtn.click()
        cy.contains('Username is required')
      })
  })