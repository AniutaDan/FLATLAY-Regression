class HomePage { 
    get upgradeBtn() {return cy.get('[class="mt-auto"] [class="float-right link-item"]');}    
    get sideMenuElement () {return cy.get('[class="navigation-element"]')};
   
    navigateToMenuItemByText(menuItemName) {
       this.sideMenuElement.contain(menuItemName).click();
    }
}
export default new HomePage;
