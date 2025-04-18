class LoginPage {
    get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return cy.get('[name="password"]')} 
    get loginBtn() {return cy.contains("Login")}
    get logOutLoc(){return cy.url()}

    login(email= "alvaroedeavila@gmail.com", password="654321"){
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }
}

export default new LoginPage();
