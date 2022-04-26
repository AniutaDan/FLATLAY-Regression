class ListPage {
    get listBtn () {return cy.contains('Lists')}
    get createList() {return cy.get('.create-saved-list-button')}
    get nameList() {return cy.get('.mat-input-element')}
    get saveList() {return cy.get('.save-button')}
    get removeList() {return cy.get('.remove-item-button')}
}
export default new ListPage()