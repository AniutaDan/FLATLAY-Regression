import Data from "../../../data/base.data.json";
import Credentials from "../../../data/credentials.json";
import LoginPage from "../../../fixtures/Brand/login/login.page"
import CommunitiesPage from "../../../fixtures/Brand/communities/communities";
import viewport from "../../../data/viewport.json"

describe("Communities", () => {
  beforeEach(() => {
    cy.visit(Data.baseUrl);
    cy.config(viewport);
  });
  //   FL-272
  it('User should have 12 communities in "Communities to browse" section carousel(add names to case and verify them)', () => {
    LoginPage.loginBtn.click();
    LoginPage.emailInput.type(Credentials.emailCreator);
    LoginPage.passwordInput.type(Credentials.passwordCreator);
    LoginPage.submitBtn.click();
    CommunitiesPage.discoverBtn.click()
    CommunitiesPage.communImg.should("have.length", 12)
    CommunitiesPage.communNames.should("have.text", ' Fashion  Beauty  Technology  Home  Health & Fitness  Food & Beverages  Sports  Travel  Media  Photography  Design  Pets ')
  });
});
