class Page {
    get sideMenuElement (){return cy.get('[class="navigation-element"]')};

    navigateToSideMenu(menuItem){
        this.sideMenuElement.contains(menuItem).click();
    }
}
export default new Page();