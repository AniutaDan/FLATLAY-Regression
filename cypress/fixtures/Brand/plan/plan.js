class PlanPage {
    
    get planCards() {return cy.get('[class="card-body d-flex flex-column"]')};
    get switchToYearBtn() {return cy.get('[class="p-2 text-center selected"]')};
    get currentPlan99() {return cy.get('[class="mx-1 selected-plan-button"]')};
    get inputVaucher() {return cy.get('[class="input-group ng-star-inserted"]')};
    get arrowBtnInputVauchar() {return cy.get('[class="input-group-text voucher-code-container link-item p-0"]')};
    get planCardBasic() {return cy.get('[class="card-header pricing-free-plan d-flex flex-row justify-content-between align-center"]')};
    get planCardPro() {return cy.get('[class="card-header pricing-pro-plan d-flex flex-row justify-content-between align-center"]')};
    get planCardPremium() {return cy.get('[class="card-header pricing-prem-plan d-flex flex-row justify-content-between align-center"]')};
    get planCardEnterprize() {return cy.get('[class="card-header pricing-ent-plan d-flex flex-row justify-content-between align-center"]')};


    InputVaucherValue(Vaucher){
        this.inputVaucher.type(Vaucher);
        this.arrowBtnInputVauchar.click();
    };      
}
export default new PlanPage;