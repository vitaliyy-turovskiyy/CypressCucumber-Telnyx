import { Before, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SignUpPage } from '../e2e/pages/SignUpPage.js';
import { TelnyxHomePage } from '../e2e/pages/TelnyxHomePage.js';
import { Helper } from "../support/helper.js";

const signupPage = new SignUpPage();
const homePage = new TelnyxHomePage();
const helper = new Helper();

Before(() => {
    homePage.visit();
    helper.closeCookiePopup();
});

When("I am entering an email address", () => {
    signupPage.enteringUserEmail();
});

Then("I click the “Try for free” button", () => {
    signupPage.clickTryForFreeButton();
});

Then("I should see the sign up page", () => {
    signupPage.checkSignUpUrl();
});

Then("I should see the email", () => {
    signupPage.checkEmailInput();
});

When("I click the “Try for free” btn", () => {
    signupPage.clickTryForFreeButton();
});

Then("I click the “Create Account” btn", () => {
    signupPage.clickCreateAccountButton();
});

Then("I should see errors messages", () => {
    signupPage.checkEmailErorMmssage();
    signupPage.checkFullNameErorMmssage();
});

When("I click the “Try for free”", () => {
    signupPage.clickTryForFreeButton();
});

Then("I enter “Work email” address “Full name” and “password”", () => {
    signupPage.enteringWorkEmail();
    signupPage.enteringUserFullName();
    signupPage.enteringUserPassword();
});

Then("I click the “Create Account” button", () => {
    signupPage.clickCreateAccountButton();
});

Then("I should see error messages", () => {
    signupPage.checkAcceptconditionsMmssage();
});

When("I click “Try for free”", () => {
    signupPage.clickTryForFreeButton();
});

Then("I click “Have a promo code?”", () => {
    signupPage.clickHavePromoCode();
});

Then("I click the “Promo code optional” button", () => {
    signupPage.checkPromoCodeOptional();
});

When("I am click “Try for free”", () => {
    signupPage.clickTryForFreeButton();
});

Then("I should navigatee to the sign up page and click the link text “Log in”", () => {
    signupPage.clickLogInLinkText();
});

Then("I should navigatee to the Login and click “Forgot your password?” link text", () => {
    signupPage.checkLoginUrl();
    signupPage.clickForgotPasswordLinkText();
});

Then("I should navigatee to the Password Reset page", () => {
    signupPage.checkPasswordResetUrl();
});
