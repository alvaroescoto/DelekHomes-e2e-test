import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page"
import listingDetails from "../../fixtures/testData/listingsDetailsUi.json";

let houseId;

describe("Search thruogh Home Page", () => {
  before(() => {
    cy.login();
    cy.createLisitng().then((id) => {
      houseId = id;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  after(() => {
    cy.deleteLisitngById(houseId);
  });

  it("Should search by keyword", () => {
    homePage.searchInput.type(listingDetails.newListingPage.houseName);
    homePage.searchBtn.click();
    cy.contains(listingDetails.newListingPage.houseName).should("be.visible");
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsBtn.click();
    homePage.bedroomsInput.click();
    homePage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    feacturedListingPage.bedroomsLoc.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    homePage.cityInput.type(listingDetails.newListingPage.city);
    homePage.searchBtn.click();
    feacturedListingPage.cityUniqueLoc.should("have.length", 1);
    feacturedListingPage.moreInfoBtn.click();
    listingDetails.newListingDetails.forEach((text) => {
      feacturedListingPage.moreInfoDetail.contains(text).should("be.visible");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=6000000-8000000");
    feacturedListingPage.housePriceLoc
      .invoke("text")
      .should("include", "$ 7,000,000")
      .and("include", listingDetails.newListingPage.houseName);
  });
});
