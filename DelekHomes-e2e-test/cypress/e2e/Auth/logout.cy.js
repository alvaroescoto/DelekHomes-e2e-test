import loginPage from '../../page_objects/login.page';
import userCredentials from '../../fixtures/testData/User.Credentials.Fixture.File.json';
import dashboardPage from "../../page_objects/dashboard.page";

describe("Logout Tests", () => {
  it("Should Logout", () => {
    cy.login();
    cy.visit("/dashboard/user/profile")
    dashboardPage.userNameLoc.should('be.visible', userCredentials.admin.fullName);
    dashboardPage.userRoleLoc.should("be.visible", userCredentials.usersRole.admin);
    dashboardPage.logout();
    loginPage.logOutLoc.should('include', '/auth/login');
  });
});
