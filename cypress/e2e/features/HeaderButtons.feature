Feature: Testing buttons in the header of the main page 
    
    Scenario: Tel_01 Clicking the 'Call Us' button
        When I click the “Call Us” button
        Then I should see the telephone number

    Scenario: Tel_02 Clicking the 'Support Center' button
        When I click the “Support Center” button
        Then I should go to “Support Center“ page
        Then I should see the article “Support Center“ in header
    
    Scenario: Tel_03 Clicking the 'Log In' button
        When I click the “Log In” button
        Then I should go to “Log In“ page
        Then I should see the article “Log In“ in header

    Scenario: Tel_04 Clicking the 'Talk to an expert' button
        When I click the “Talk to an expert” button
        Then I should go to “Talk to an expert“ page
        Then I should see the article “Talk to an expert“ in header

    Scenario: Tel_05 Clicking the 'Sign Up' button
        When I click the “Sign Up” button
        Then I should go to “Sign Up“ page
        Then I should see the article “Create a free account“ in header