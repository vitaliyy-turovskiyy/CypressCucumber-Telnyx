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

When("I click the “Call Us” button", () => {
    homePage.clickCallUsButton();
});

Then("I should see the telephone number", () => {
    homePage.getPhoneNumber();
});

When("I click the “Support Center” button", () => {
    homePage.clickSupportCenterButton();
});

Then("I should go to “Support Center“ page", () => {
    homePage.checkSupportTitle();
});

Then("I should see the article “Support Center“ in header", () => {
    homePage.checkSupportCenterArticle();
});

When("I click the “Log In” button", () => {
    homePage.clickLogInButton();
});

Then("I should go to “Log In“ page", () => {
    homePage.checkLogInTitle();
});

Then("I should see the article “Log In“ in header", () => {
    homePage.checkLogInArticle();
});

When("I click the “Talk to an expert” button", () => {
    homePage.clickTalkToAnExpertButton();
});

Then("I should go to “Talk to an expert“ page", () => {
    homePage.checkTalkToAnExpertuttonTitle();
});

Then("I should see the article “Talk to an expert“ in header", () => {
    homePage.checkTalkToAnExpertuttonArticle();
});

When("I click the “Sign Up” button", () => {
    homePage.clickSignUpButton();
});

Then("I should go to “Sign Up“ page", () => {
    homePage.checkTalkToAnExpertuttonTitle();
});

Then("I should see the article “Create a free account“ in header", () => {
    homePage.checkTalkToAnExpertuttonArticle();
});