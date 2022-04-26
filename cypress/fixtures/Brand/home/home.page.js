class BrandHomePage{
    get iconProfileUpperCorner() {return cy.get('[class="profile-photo"]')}
    get signOutBtn() {return cy.contains("Sign Out")}

    LogoutBrand(){
        this.iconProfileUpperCorner.click();
        this.signOutBtn.click();
    }
}
export default new BrandHomePage();