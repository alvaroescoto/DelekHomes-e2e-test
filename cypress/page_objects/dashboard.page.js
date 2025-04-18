class DashboardPage{
    get humanBtn() {return cy.get('[class*="MuiIconButton-sizeMedium css-w5qhhs"]', {timeout: 10000}).should('be.visible')}
    get logoutBtn() {return cy.contains('Logout')}
    get userNameLoc() {return cy.get('[class="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap css-1k96qjc"]')}
    get userRoleLoc() {return cy.get("a p")}
    get realEstateBtn() {return cy.get('[class*=" MuiListItemButton-gutters css-5lxk9v"]')}
    get realEstCreateBtn() {return cy.get('[role="button"]').eq(5)}
    get demoValuesBtn() {return cy.get('[class="MuiBox-root css-6su6fj"]')}
    get titleInput() {return cy.get('[name="title"]')}
    get houseImageDismiss() {return cy.get('[class*="MuiIconButton-sizeSmal"]', { timeout: 10000 })}
    get dropImage() {return cy.get('[role="presentation"]').selectFile('cypress/fixtures/pictures/house.jpg', { action: 'drag-drop' })}
    get imageLoc() {return cy.get('[class="MuiBox-root css-6jrdpz"]')}
    get publishBtn() {return cy.get('[type="checkbox"]').eq(1)};
    get priceInput() {return cy.get('[name="price"]')};
    get bedroomsInput() {return cy.get('[name="bedrooms"]')}
    get bathroomsInput() {return cy.get('[name="bathrooms"]')};
    get bedroomsInput() {return cy.get('[name="bedrooms"]')}
    get garageInput() {return cy.get('[name="garage"]')}
    get sqftInput() {return cy.get('[name="sqft"]')}
    get lotSizeInput() {return cy.get('[name="lotSize"]')}
    get descriptionInput(){return cy.get('[name="description"]')}
    get cityInput(){return cy.get('[name="city"]')}
    get descriptionInput() {return cy.get('[name="description"]')}
    get addressInput() {return cy.get('[name="address"]')}
    get zipCodeInput() {return cy.get('[name="zipCode"]')}
    get stateMenuBtn() {return cy.get('[aria-haspopup="listbox"]')}
    get stateInput() {return cy.contains('Alaska')};
    get postBtn() {return cy.get('[type="submit"]')};
    getFakeUser (firstName, lastName) {return cy.contains(`${firstName} ${lastName}`)};

    logout(){
        this.humanBtn.click();
        this.logoutBtn.click();     
    }
}

export default new DashboardPage();
