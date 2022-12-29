Feature: Testing social links at the footer of the main page
    
    Scenario: Tel_06 The “Connect on LinkedIn” link
        When I scroll down to the bottom of the main page
        Then I should see the “Connect on LinkedIn” link
        Then it should redirect to the Telnyx LinkedIn page

    Scenario: Tel_07 The “Follow on Twitter” link
        When I scroll down to the page bottom 
        Then I should see the “Follow on Twitter” link
        Then it should redirect to the Telnyx Twitter page

    Scenario: Tel_08 The “Follow on Facebook” link
        When I scroll down to the bottom of the page
        Then I should see the “Follow on Facebook” link
        Then it should redirect to the Telnyx Facebook page