import msgCredentials from '../../fixtures/testData/authorization.Errors.Text.json'
import userCredentials from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';

describe("Registration", () => {
  before(() => {
    cy.visit('/')
    homePage.registrationBtn.click();
  });
  
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("should not register with an already account", () => {
    registrationPage.registration
      (userCredentials.admin.firstName, userCredentials.admin.lastName, userCredentials.admin.email, userCredentials.admin.password)
    cy.contains(msgCredentials.invalidUser).should("be.visible")
  });

  it("Should not register without filling in required fields", () => {
    registrationPage.registrationButton.click();
    cy.contains(msgCredentials.firstNameReq).should("be.visible");
    cy.contains(msgCredentials.lastNameReq).should("be.visible")
    cy.contains(msgCredentials.emailReq).should("be.visible")
    cy.contains(msgCredentials.passwordReq).should("be.visible")
  });
})
