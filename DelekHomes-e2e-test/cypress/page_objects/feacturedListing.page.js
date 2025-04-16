class feacturedListingPage {

  get moreInfoBtn() {return cy.contains('More Info', {timeout:3000}).eq(0)};
  get searchInput() {return cy.get('[type="text"]').eq(0)}
  get searchBtn() {return cy.get('[type="button"]').eq(0)}
  get bedroomsBtn() {return cy.get('[role="button"]', { timeout: 10000 }).eq(0).should('be.visible')}
  get bedroomsInput() {return cy.contains('2+')}
  get cityInput() {return cy.get('[type="text"]').eq(1)}
  get cityUniqueLoc() {return cy.get('[class*="MuiGrid-grid-xs-6"]').filter(':contains("City: Patagonia")')}
  get housePriceLoc() {return cy.get('[class*=" MuiPaper-rounded MuiPaper-elevation0 "]').eq(0)}
  get houseInfo() {return cy.get('[class*="MuiPaper-elevation MuiPaper-rounded "]').first()}
  get moreInfoDetail() {return cy.get('[class*="MuiGrid-grid-xs-8 MuiGrid-grid-sm-12"]')}
  get bedroomsLoc() { return cy.get('.MuiGrid-root').contains("Bedrooms:").invoke('text').then((text) => 
    {return parseInt(text.match(/Bedrooms:\s*(\d+)/)[1], 10); });}
}

export default new feacturedListingPage();
