import { email, FullName,Password } from "../../support/testData.js"
export class SignUpPage {
    
    elements ={

        UserEmail : () => cy.get('[type="email"]'),
        WorkEmail : () => cy.get('[id="email"]'),
        UserFullName : () => cy.get('[id="full_name"]'),
        UserPassword : () => cy.get('[id="password"]'),
        TryForFreeButton : () => cy.get('[type="submit"]'),
        EmailInput : () => cy.get('[id="email"]').wait(2000),
        CreateAccountButton : () => cy.get('[class="sc-5d3a275a-0 jdjrgE"]'),
        EmailErorMmssage : () => cy.get('[id="email_error"]'),
        FullNameErorMmssage : () => cy.get('[id="full_name_error"]'),
        AcceptconditionsMmssage : () => cy.get('[class="sc-570b157-1 eUoKGn"]'),
        HavePromoCode : () => cy.get('form [class="sc-5d3a275a-0 eKznVb"]'),
        PromoCodeOptional : () => cy.get('[class="sc-26f7330-3 bvuslR"]'),
        LogInLinkText : () => cy.get('[href="https://portal.telnyx.com/#"]'),
        ForgotPasswordLinkText : () => cy.get('[href="/#/login/password-reset"]'),
    }
    
    enteringUserEmail() {
        this.elements.UserEmail().type(email);
    }
    enteringWorkEmail() {
        this.elements.WorkEmail().type(email);
    }
    enteringUserFullName() {
        this.elements.UserFullName().type(FullName);
    }
    enteringUserPassword() {
        this.elements.UserPassword().type(Password);
    }
    clickTryForFreeButton() {
        this.elements.TryForFreeButton().click();
    }
    checkSignUpUrl() {
        return cy.title().should('eq','Sign Up | Telnyx');
    }
    checkEmailInput() {
        this.elements.EmailInput().should('have.value', email);
    }
    clickCreateAccountButton() {
        this.elements.CreateAccountButton().click();
    }
    checkEmailErorMmssage() {
        this.elements.EmailErorMmssage().should('have.text','This field is required.').and('be.visible');
    }
    checkFullNameErorMmssage() {
        this.elements.FullNameErorMmssage().should('have.text','This field is required.').and('be.visible');
    }
    checkAcceptconditionsMmssage() {
        this.elements.AcceptconditionsMmssage().should('have.text','Please accept the terms and conditions').and('be.visible');
    }
    clickHavePromoCode() {
        this.elements.HavePromoCode().should('be.visible').click();
    }
    checkPromoCodeOptional() {
        this.elements.PromoCodeOptional().should('be.visible');
    }
    clickLogInLinkText() {
        this.elements.LogInLinkText().should('be.visible').click();
    }
    checkLoginUrl() {
        return cy.title().should('eq','Login / Telnyx Customer Portal');
    }
    clickForgotPasswordLinkText() {
        this.elements.ForgotPasswordLinkText().should('be.visible').click();
    }
    checkPasswordResetUrl() {
        return cy.title().should('eq','Password Reset / Telnyx Customer Portal');
    }
}
