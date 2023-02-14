import { TelnyxHomePage } from '../pages/TelnyxHomePage.js';
import { email, FullName,Password } from "../../support/testData.js"
export class SignUpPage extends TelnyxHomePage {
    
    constructor() {
        super();
    }

    elements ={
        userEmail : () => cy.get('[type="email"]'),
        workEmail : () => cy.get('[id="email"]'),
        userFullName : () => cy.get('[id="full_name"]'),
        userPassword : () => cy.get('[id="password"]'),
        tryForFreeButton : () => cy.get('[type="submit"]'),
        emailInput : () => cy.get('[id="email"]', { timeout: 2000 }),
        createAccountButton : () => cy.get('[class="sc-5d3a275a-0 jdjrgE"]'),
        emailErorMmssage : () => cy.get('[id="email_error"]'),
        fullNameErorMmssage : () => cy.get('[id="full_name_error"]'),
        acceptconditionsMmssage : () => cy.get('[class="sc-570b157-1 eUoKGn"]'),
        havePromoCode : () => cy.get('form [class="sc-5d3a275a-0 eKznVb"]'),
        promoCodeOptional : () => cy.get('[class="sc-26f7330-3 bvuslR"]'),
        logInLinkText : () => cy.get('[href="https://portal.telnyx.com/#"]'),
        forgotPasswordLinkText : () => cy.get('[href="/#/login/password-reset"]'),
    }
    
    enteringUserEmail() {
        this.elements.userEmail().type(email);
    }
    enteringWorkEmail() {
        this.elements.workEmail().type(email);
    }
    enteringUserFullName() {
        this.elements.userFullName().type(FullName);
    }
    enteringUserPassword() {
        this.elements.userPassword().type(Password);
    }
    clickTryForFreeButton() {
        this.elements.tryForFreeButton().click();
    }
    checkSignUpUrl() {
        return cy.title().should('eq','Sign Up | Telnyx');
    }
    checkEmailInput() {
        this.elements.emailInput().should('have.value', email);
    }
    clickCreateAccountButton() {
        this.elements.createAccountButton().click();
    }
    checkEmailErorMmssage() {
        this.elements.emailErorMmssage().should('have.text','This field is required.').and('be.visible');
    }
    checkFullNameErorMmssage() {
        this.elements.fullNameErorMmssage().should('have.text','This field is required.').and('be.visible');
    }
    checkAcceptconditionsMmssage() {
        this.elements.acceptconditionsMmssage().should('have.text','Please accept the terms and conditions').and('be.visible');
    }
    clickHavePromoCode() {
        this.elements.havePromoCode().should('be.visible').click();
    }
    checkPromoCodeOptional() {
        this.elements.promoCodeOptional().should('be.visible');
    }
    clickLogInLinkText() {
        this.elements.logInLinkText().should('be.visible').click();
    }
    checkLoginUrl() {
        return cy.title().should('eq','Login / Telnyx Customer Portal');
    }
    clickForgotPasswordLinkText() {
        this.elements.forgotPasswordLinkText().should('be.visible').click();
    }
    checkPasswordResetUrl() {
        return cy.title().should('eq','Password Reset / Telnyx Customer Portal');
    }
}
