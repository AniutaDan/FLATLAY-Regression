import Data from "../../../data/base.data.json";
import Credentials from "../../../data/credentials.json";
import LoginPage from "../../../fixtures/Creator/login/login.page";
import CollectionPage from "../../../fixtures/Creator/collections/collection.page";
import { recurse } from "cypress-recurse";

describe("Collections", () => {
  beforeEach(() => {
    cy.visit(Data.baseUrl);
  });

  it("User should be able to create new collection, FL-78", () => {
    //Click on 'Login' button
    LoginPage.loginBtn.click();

    //Input Email
    LoginPage.emailInput.type(Credentials.emailCreator);

    //Input Password
    LoginPage.passwordInput.type(Credentials.passwordCreator);

    //CLick on 'Continue' button
    LoginPage.submitBtn.click();

    //Helper Method to create new collection
    CollectionPage.createNewCollection('hat');

    //Get back to Collections page after collection is created
    CollectionPage.backToCollectionsBtn.click();

    // Verification that 'Test Collection' exists at Collections page
    recurse(
      () =>
        cy.contains(".collection-header", "Test Collection").should(() => {}),
      ($header) => $header.length > 0,
      {
        limit: 30,
        timeout: 30000,
        post() {
          cy.get(".collection-header").then(($collections) => {
            cy.scrollTo("bottom");
            cy.get(".collection-header").should("have.length.at.least", $collections.length);
          });
        },
      }
    )
      .scrollIntoView()
      .invoke("css", "border", "2px solid red");
  });

  it("User should be able to remove collection, FL-277", () => {
    //Click on 'Login' button
    LoginPage.loginBtn.click();

    //Input Email
    LoginPage.emailInput.type(Credentials.emailCreator);

    //Input Password
    LoginPage.passwordInput.type(Credentials.passwordCreator);

    //CLick on 'Continue' button
    LoginPage.submitBtn.click();

    //Helper Method to create new collection
    CollectionPage.createNewCollection('watch');

    //Get back to Collections page after collection is created
    CollectionPage.backToCollectionsBtn.click();

    // Verification that 'Test Collection' exists and then delete it
    recurse(
      () =>
        cy.contains(".collection-header", "Test Collection").should(() => {}),
      ($header) => $header.length > 0,
      {
        limit: 30,
        timeout: 30000,
        post() {
          cy.get(".collection-header").then(($collections) => {
            cy.scrollTo("bottom");
            cy.get(".collection-header").should("have.length.at.least", $collections.length);
          });
        },
      }
    )
      .within(() => {
        cy.get('.fa-trash').click()
    });

    //Verification that collection was deleted
    cy.contains("Collection deleted successfully").should('be.visible');
  });
});