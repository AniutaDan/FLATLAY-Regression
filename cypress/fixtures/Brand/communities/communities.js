class CommunitiesPage {
    get discoverBtn () {return cy.get('[routerlink="discover"]')}
    get communImg () {return cy.get('.featured-bullet > img')}
    get communNames () {return cy.get('[class="ui-carousel-items-container"] [class="font-gt"]')} 
}
// Allow other files to import it
export default new CommunitiesPage()