Feature: Testing the main page
    
    Scenario: Tel_09 Clicking the "Try for Free" button with the email address entered by the user
        When I am entering an email address
        Then I click the “Try for free” button 
        Then I should see the sign up page
        Then I should see the email

    Scenario: Tel_10 Checking the appearance of error messages when registering a user without entering personal data
        When I click the “Try for free” btn
        Then I click the “Create Account” btn
        Then I should see errors messages

    Scenario: Tel_11 Checking the appearance of error messages when registering a user without accept the terms and conditions
        When I click the “Try for free” 
        Then I enter “Work email” address “Full name” and “password”
        Then I click the “Create Account” button
        Then I should see error messages

    Scenario: Tel_12 Checking the "promo code" window will appear
        When I click “Try for free” 
        Then I click “Have a promo code?” 
        Then I click the “Promo code optional” button

    Scenario: Tel_13 Checking the transition to the "Password Reset page" 
        When I am click “Try for free” 
        Then I should navigatee to the sign up page and click the link text “Log in” 
        Then I should navigatee to the Login and click “Forgot your password?” link text
        Then I should navigatee to the Password Reset page 
        
        
    
   
    
    