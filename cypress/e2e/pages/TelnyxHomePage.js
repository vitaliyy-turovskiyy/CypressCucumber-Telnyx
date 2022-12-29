export class TelnyxHomePage {

    visit() {
        cy.visit('https://telnyx.com/');
    }

    elements ={
        LinkedInLink : () => cy.get('footer > div > div > div:nth-child(6) > div > ul > li:nth-child(1) > a'),
        TwitterLink : () => cy.get('footer > div> div > div:nth-child(6) > div > ul > li:nth-child(2) > a'),
        FacebookLink : () => cy.get('footer > div> div > div:nth-child(6) > div > ul > li:nth-child(3) > a'),
        CallUsButton : () => cy.get('[class="Text-sc-5o8owa-0 sc-28d89a84-0 sc-d9b163cf-7 frufKM bJzgmA"]'),
        PhoneNumber : () => cy.get('[class="sc-d9b163cf-3 iBVdlS"]'),
        SupportCenterArticle : () => cy.get('[class="header__headline"]'),
        LogInButton : () => cy.get('header > div > div > div > a:nth-child(4)'),
        LogInArticle : () => cy.get('[data-testid="login.signin.title"]'),
        TalkToAnExpertButton : () => cy.get('li [href="/contact-us"]'),
        TalkToAnExpertuttonArticle : () => cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-2 clNvhv cptehe"]'),
        SignUpButton : () => cy.get('li [href="/contact-us"]'),
        CreateFreeAccountArticle : () => cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]'),
    }
  
    clickCallUsButton() {
        this.elements.CallUsButton().click();
    }
    getPhoneNumber() {
        this.elements.PhoneNumber().should('contain','+1 888 980 9750');
    }
    clickSupportCenterButton() {
        return cy.get(' header > div > div > div > a:nth-child(3)').click();
    }
    checkSupportTitle() {
        return cy.title().should('eq','Telnyx Support');
    }
    checkSupportCenterArticle() {
        this.elements.SupportCenterArticle().should('contain','Support Center');
    }
    clickLogInButton() {
        this.elements.LogInButton().click();
    }
    checkLogInTitle() {
        return cy.title().should('eq','Login / Telnyx Customer Portal');
    }
    checkLogInArticle() {
        this.elements.LogInArticle().should('contain','Log in');
    }
    clickTalkToAnExpertButton() {
        this.elements.TalkToAnExpertButton().click();
    }
    checkTalkToAnExpertuttonTitle() {
        return cy.title().should('eq','Contact a member of the Telnyx sales team');
    }
    checkTalkToAnExpertuttonArticle() {
        this.elements.TalkToAnExpertuttonArticle().should('contain','Talk to an expert');
    }
    clickSignUpButton() {
        this.elements.SignUpButton().click();
    }
    checkSignUpTitle() {
        return cy.title().should('eq','Sign Up | Telnyx');
    }
    checkCreateFreeAccountArticle() {
        this.elements.CreateFreeAccountArticle().should('contain','Create a free account');
    }
    FooterBlock() {
        return cy.get('.sc-7b6c9f9b-3').scrollIntoView();
    }
    getLinkedInLink() {
        return this.elements.LinkedInLink().should('be.visible');
    }
    checkLinkedInLink() {
        this.elements.LinkedInLink().should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/');
    }
    getTwitterLink() {
        return this.elements.TwitterLink().should('be.visible');
    }
    checkTwitterLink() {
        this.elements.TwitterLink().should('have.attr', 'href', 'https://twitter.com/telnyx');
    }
    getFacebookLink() {
        return this.elements.FacebookLink().should('be.visible');
    }
    checkFacebookLink() {
        this.elements.FacebookLink().should('have.attr', 'href', 'https://www.facebook.com/Telnyx/');
    }

}