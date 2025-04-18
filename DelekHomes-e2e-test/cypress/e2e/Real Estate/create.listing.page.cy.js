import dashboardPage from "../../page_objects/dashboard.page";
import listingsDetails from "../../fixtures/testData/listingsDetailsUi.json";
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

let houseId;

describe("Create a new Listing Page", () => {
  before(() => {
    cy.login();
    cy.visit("/dashboard/user/profile");
  });

  after(() => {
    cy.deleteLisitngById(houseId);
  });

  it("should create a new listing Page", () => {
    dashboardPage.realEstateBtn.click();
    dashboardPage.realEstCreateBtn.click();
    dashboardPage.dropImage;
    dashboardPage.titleInput.type(listingsDetails.newListingPage.houseName);
    dashboardPage.descriptionInput.type(
      listingsDetails.newListingPage.description
    );
    dashboardPage.cityInput.type(listingsDetails.newListingPage.city);
    dashboardPage.addressInput.type(listingsDetails.newListingPage.address);
    dashboardPage.zipCodeInput.type(listingsDetails.newListingPage.zipCode);
    dashboardPage.priceInput.type(listingsDetails.newListingPage.price);
    dashboardPage.bedroomsInput.type(listingsDetails.newListingPage.bedrooms);
    dashboardPage.bathroomsInput.type(listingsDetails.newListingPage.bathrooms);
    dashboardPage.garageInput.type(listingsDetails.newListingPage.garage);
    dashboardPage.sqftInput.type(listingsDetails.newListingPage.sqft);
    dashboardPage.lotSizeInput.type(listingsDetails.newListingPage.lotSize);
    dashboardPage.stateMenuBtn.click();
    dashboardPage.stateInput.click();
    dashboardPage.publishBtn.click();
    dashboardPage.postBtn.click();
    cy.contains(listingsDetails.newListingPage.houseName, {
      timeout: 10000
    }).should("be.visible");
    cy.visit("/", { timeout: 10000 });
    homePage.searchInput.type(listingsDetails.newListingPage.houseName);
    homePage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    listingsDetails.newListingDetails.forEach((text) => {
      feacturedListingPage.moreInfoDetail.contains(text).should("be.visible");
    });
    cy.url().then((url) => {
      houseId = url.split("/").pop();
    });
  });
});
