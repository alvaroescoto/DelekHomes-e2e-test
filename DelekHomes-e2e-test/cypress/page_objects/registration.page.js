class RegistrationPage {
    get firstNameInput() {return cy.get('[name="firstName"]')}
    get lastNameInput() {return cy.get('[name="lastName"]')}
    get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return cy.get('[name="password"]')} 
    get registrationButton() {return cy.get('[type="submit"]')}
    
    registration(name, lastName, email, password){
        this.firstNameInput.type(name);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.registrationButton.click();
    }
}

export default new RegistrationPage();
