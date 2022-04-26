class CollectionPage {
  get buildCollection() {return cy.get('[routerlink="collections"]');}
  get newCollection() {return cy.get('[routerlink="/creator/collections/create"]');}
  get nameCollection() {return cy.get('[placeholder="Collection name"]');}
  get addProduct() {return cy.get(".fa-plus");}
  get searchProduct() {return cy.get('[placeholder="Search products"]');}
  get selectProduct() {return cy.get('.search-result div:first-child [class="cursor-pointer"]', { timeout: 15000 });}
  get addProductsBtn() {return cy.get("button.add-products-btn");}
  get confirmCollection() {return cy.get(".fa-check");}
  get backToCollectionsBtn() {return cy.get(".back-button");}

  // Helper Method to create new collection
  createNewCollection(searchInput) {
    this.buildCollection.click()
    this.newCollection.click();
    this.nameCollection.type("Test Collection");
    this.addProduct.click();
    this.searchProduct.type(`${searchInput}{enter}`);
    this.selectProduct.click();
    this.addProductsBtn.click();
    this.confirmCollection.click();
    cy.contains("Collection created successfully");
  }
}

// Allow other files to import it
export default new CollectionPage();
