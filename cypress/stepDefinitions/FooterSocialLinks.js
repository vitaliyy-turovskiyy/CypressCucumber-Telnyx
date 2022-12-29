import { Before, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TelnyxHomePage } from '../e2e/pages/TelnyxHomePage.js';
import { Helper } from "../support/helper.js";

const homePage = new TelnyxHomePage();
const helper = new Helper();

Before(() => {
    homePage.visit();
    cy.viewport(1366, 768);
    helper.closeCookiePopup();
});

When("I scroll down to the bottom of the main page", () => {
    homePage.FooterBlock();
});

Then("I should see the “Connect on LinkedIn” link", () => {
    homePage.getLinkedInLink();
});

Then("it should redirect to the Telnyx LinkedIn page", () => {
    homePage.checkLinkedInLink();
});

When("I scroll down to the page bottom", () => {
    homePage.FooterBlock();
});

Then("I should see the “Follow on Twitter” link", () => {
    homePage.getTwitterLink();
});

Then("it should redirect to the Telnyx Twitter page", () => {
    homePage.checkTwitterLink();
});

When("I scroll down to the bottom of the page", () => {
    homePage.FooterBlock();
});

Then("I should see the “Follow on Facebook” link", () => {
    homePage.getFacebookLink();
});

Then("it should redirect to the Telnyx Facebook page", () => {
    homePage.checkFacebookLink();
});

