import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SwitchSavePage } from '../e2e/pages/HomeSwitchPage';
import { TelnyxHomePage } from '../e2e/pages/TelnyxHomePage.js';
import { Helper } from "../support/helper.js";

const switchPage = new SwitchSavePage();
const homePage = new TelnyxHomePage();
const helper = new Helper();

Given("The main page of Telnyx website and close all cookies",() => {
    homePage.visit();
    cy.viewport(1366, 768);
    helper.closeCookiePopup(); 
});

When("I scroll to “Switch + Save with Telnyx” which should be visible", () => {
    switchPage.checkSwitchSaveWithTelnyx();
});

Then("I click the “SMS” button", () => {
    switchPage.clickSMSButton();
});

Then("I have to see that the price has changed", () => {
    switchPage.checkTelnyxCost();
    switchPage.checkTwilioCost();
});

When("I scroll to “Switch Save with Telnyx” which should be visible", () => {
    switchPage.checkSwitchSaveWithTelnyx();
});

Then("I click the “Toll-free numbers” radio btn", () => {
    switchPage.clickTollFreeNumberst();
});

Then("I click the “Programmable Voice” radio btn", () => {
    switchPage.clickProgrammableVoice();
});

Then("I should see how the price will change", () => {
    switchPage.checkSaveUpPerMonth();
});
