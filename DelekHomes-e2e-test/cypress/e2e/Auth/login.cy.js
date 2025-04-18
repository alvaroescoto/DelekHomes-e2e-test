import homePage from '../../page_objects/home.page';
import userCredentials from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import loginPage from "../../page_objects/login.page";
import dashboardPage from '../../page_objects/dashboard.page';

describe("Login Tests", () => {
  
  it("Should Login", () => {
    cy.visit("/");
    cy.intercept('POST', '/api/users/login').as('loginRequest')
    homePage.loginBtn.click()
    loginPage.login();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 201)
    dashboardPage.userNameLoc.should('be.visible', userCredentials.admin.fullName)
    dashboardPage.userRoleLoc.should("be.visible", userCredentials.usersRole.admin);
  });

  it("visual test", () => {
    cy.visit("/");
    cy.scrollTo('top')

    cy.get('[href="/auth/login"]').then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      cy.log(`Top: ${rect.top}, Left: ${rect.left}`);

      // Visual test
      
      cy.get('[href="/auth/login"]').should('be.visible').then(($el) => {
        const rect = $el[0].getBoundingClientRect();
    
      // Example assertion for the position
        expect(rect.top).to.be.closeTo(30, 5); // Allow ±5px tolerance
        expect(rect.left).to.be.closeTo(982.34375, 5); 
      })
    });
  });



  
});
