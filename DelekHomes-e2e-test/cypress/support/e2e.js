import './commands'

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Session expired") || err.message.includes("401 Unauthorized")) {
    cy.login(); 
    return false; 
  }

  return false;
});

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
  })
