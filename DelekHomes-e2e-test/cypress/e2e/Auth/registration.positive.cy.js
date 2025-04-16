import userCredentials from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import { fakerDE as faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from '../../page_objects/dashboard.page';

const fakeUser = {
  lastName: faker.name.lastName(), 
  firstName: faker.name.firstName(), 
  email: faker.internet.email(),
  password: faker.internet.password()
};

describe("Registration Positive", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept('POST', '/api/users/registration').as('registerRequest');
  });

  it("Should register new account", () => {
    homePage.registrationBtn.click();
    registrationPage.registration(
      fakeUser.firstName,
      fakeUser.lastName,
      fakeUser.email,
      fakeUser.password
    );
    registrationPage.registrationButton;
    cy.wait('@registerRequest').its('response.statusCode').should('eq', 201);
    dashboardPage.getFakeUser(fakeUser.firstName, fakeUser.lastName).should("be.visible");
    dashboardPage.userRoleLoc.should("have.text", userCredentials.usersRole.user);
  });
});





