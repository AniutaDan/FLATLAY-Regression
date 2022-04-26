import LoginPage from "../../../fixtures/Brand/login/login.page";
import ListPage from "../../../fixtures/Brand/list/list.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://new.flatlay.io");
  });

  it("User should be able to remove a list FL-275", () => {
    LoginPage.loginBrand("qalesson@gmail.com", "qalesson@gmail.com");
    ListPage.listBtn.click({force: true});
    ListPage.createList.click();
    ListPage.nameList.click().type(1234567890);
    ListPage.saveList.click();
    ListPage.removeList.click({ multiple: true });
    cy.contains("Saved has been removed from saved list successfully!");
  });
});
