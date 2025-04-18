import listingDetails from '../../cypress/fixtures/testData/listingsDetailsApi.json'
import userCredentials from "../../cypress/fixtures/testData/User.Credentials.Fixture.File.json";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add("login",(email = userCredentials.admin.email, password = userCredentials.admin.password) => {
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  }
);

Cypress.Commands.add ("createLisitng", () => {
  cy.fixture("/pictures/house.jpg").then(image => {
    const blob = Cypress.Blob.base64StringToBlob(image, "image/jpg");
    const formData = new FormData();

    formData.append("images", blob);
    formData.append('address', listingDetails.newListingPage.address);
    formData.append("isPublished", true);
    formData.append("lotSize", listingDetails.newListingPage.lotSize);
    formData.append("sqft", listingDetails.newListingPage.sqft);
    formData.append("garage", listingDetails.newListingPage.garage);
    formData.append("bathrooms", listingDetails.newListingPage.bathrooms);
    formData.append("bedrooms", listingDetails.newListingPage.bedrooms);
    formData.append("price", listingDetails.newListingPage.price);
    formData.append("zipCode", listingDetails.newListingPage.zipCode);
    formData.append("state", listingDetails.newListingPage.state);
    formData.append("city", listingDetails.newListingPage.city);
    formData.append("description", listingDetails.newListingPage.description);
    formData.append("title", listingDetails.newListingPage.houseName);

    const token = window.localStorage.getItem("accessToken");

    cy.request({
      method: "POST",
      url: "/api/estate-objects",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      },
      failOnStatusCode: false
    }).then((response) => {
          const listingId = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(response.body))).id;
          return listingId;
    })
  });
})

Cypress.Commands.add("deleteLisitngById", (houseId) => {
  const token = window.localStorage.getItem("accessToken"); 

 return cy.request({
    method: "DELETE",
    url: `/api/estate-objects/${houseId}`, 
    headers: {
      Authorization: `Bearer ${token}` 
    }
  });
})