export class TelnyxHomePage {

    visit() {
        cy.visit('https://telnyx.com/');
    }

    elements ={
        linkedInLink : () => cy.get('footer > div > div > div:nth-child(6) > div > ul > li:nth-child(1) > a'),
        twitterLink : () => cy.get('footer > div> div > div:nth-child(6) > div > ul > li:nth-child(2) > a'),
        facebookLink : () => cy.get('footer > div> div > div:nth-child(6) > div > ul > li:nth-child(3) > a'),
        callUsButton : () => cy.get('[class="Text-sc-5o8owa-0 sc-28d89a84-0 sc-d9b163cf-7 frufKM bJzgmA"]'),
        phoneNumber : () => cy.get('footer [class="mchNoDecorate"]'),
        supportCenterArticle : () => cy.get('[class="header__headline"]'),
        logInButton : () => cy.get('header > div > div > div > a:nth-child(4)'),
        logInArticle : () => cy.get('[data-testid="login.signin.title"]'),
        talkToAnExpertButton : () => cy.get('li [href="/contact-us"]'),
        talkToAnExpertuttonArticle : () => cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-2 clNvhv cptehe"]'),
        signUpButton : () => cy.get('li [href="/contact-us"]'),
        createFreeAccountArticle : () => cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]'),
        supportCenterButton : () => cy.get('header > div > div > div > a:nth-child(3)'),
    }
  
    clickCallUsButton() {
        this.elements.callUsButton().click();
    }
    getPhoneNumber() {
        this.elements.phoneNumber().should('be.visible');
    }
    clickSupportCenterButton() {
        this.elements.supportCenterButton().click();
    }
    checkSupportTitle() {
        return cy.title().should('eq','Telnyx Support');
    }
    checkSupportCenterArticle() {
        this.elements.supportCenterArticle().should('contain','Support Center');
    }
    clickLogInButton() {
        this.elements.logInButton().click();
    }
    checkLogInTitle() {
        return cy.title().should('eq','Login / Telnyx Customer Portal');
    }
    checkLogInArticle() {
        this.elements.logInArticle().should('contain','Log in');
    }
    clickTalkToAnExpertButton() {
        this.elements.talkToAnExpertButton().click();
    }
    checkTalkToAnExpertuttonTitle() {
        return cy.title().should('eq','Contact a member of the Telnyx sales team');
    }
    checkTalkToAnExpertuttonArticle() {
        this.elements.talkToAnExpertuttonArticle().should('contain','Talk to an expert');
    }
    clickSignUpButton() {
        this.elements.signUpButton().click();
    }
    checkSignUpTitle() {
        return cy.title().should('eq','Sign Up | Telnyx');
    }
    checkCreateFreeAccountArticle() {
        this.elements.createFreeAccountArticle().should('contain','Create a free account');
    }
    FooterBlock() {
        return cy.get('.sc-7b6c9f9b-3').scrollIntoView();
    }
    getLinkedInLink() {
        return this.elements.linkedInLink().should('be.visible');
    }
    checkLinkedInLink() {
        this.elements.linkedInLink().should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/');
    }
    getTwitterLink() {
        return this.elements.twitterLink().should('be.visible');
    }
    checkTwitterLink() {
        this.elements.twitterLink().should('have.attr', 'href', 'https://twitter.com/telnyx');
    }
    getFacebookLink() {
        return this.elements.facebookLink().should('be.visible');
    }
    checkFacebookLink() {
        this.elements.facebookLink().should('have.attr', 'href', 'https://www.facebook.com/Telnyx/');
    }
}