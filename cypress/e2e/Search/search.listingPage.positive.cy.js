import homePage from "../../page_objects/home.page";
import listingDetails from "../../fixtures/testData/listingsDetailsUi.json";
import FeacturedListingPage from "../../page_objects/feacturedListing.page";

let houseId;

describe("Search thruogh Feactured Listings Page", () => {
  before(() => {
    cy.login();
    cy.createLisitng().then((id) => {
      houseId = id;
    });
  });

  beforeEach(() => {
    cy.visit("/featured-listings");
    homePage.switchLightBtn.click();
  });

  after(() => {
    cy.deleteLisitngById(houseId);
  });

  it("Should search by keyword", () => {
    FeacturedListingPage.searchInput.type(
      listingDetails.newListingPage.description
    );
    FeacturedListingPage.searchBtn.click();
    cy.contains(listingDetails.newListingPage.houseName);
  });

  it("Should search by bedrooms", () => {
    FeacturedListingPage.bedroomsBtn.click();
    FeacturedListingPage.bedroomsInput.click();
    FeacturedListingPage.searchBtn.click();
    FeacturedListingPage.moreInfoBtn.click();
    FeacturedListingPage.bedroomsLoc.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    FeacturedListingPage.cityInput.type(listingDetails.newListingPage.city);
    FeacturedListingPage.searchBtn.click();
    FeacturedListingPage.cityUniqueLoc.should("have.length", 1);
    FeacturedListingPage.moreInfoBtn.click();
    listingDetails.newListingDetails.forEach((text) => {
      FeacturedListingPage.moreInfoDetail.contains(text).should("be.visible");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=6000000-8000000");
    FeacturedListingPage.housePriceLoc
      .invoke("text")
      .should("include", "$ 7,000,000")
      .and("include", listingDetails.newListingPage.houseName);
  });
});
