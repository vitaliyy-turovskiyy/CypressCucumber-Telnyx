Feature: Testing Switch + Save with Telnyx
    
    Scenario: Tel_14 Checking the price change after pressing the 'SMS' button in the block 'How much will you save?'
        When I scroll to “Switch + Save with Telnyx” which should be visible
        Then I click the “SMS” button 
        Then I have to see that the price has changed

    Scenario: Tel_15 Checking the price change after clicking the 'Toll-free numbers' and 'No' radio buttons in the block 'How much will you save?'
        When I scroll to “Switch Save with Telnyx” which should be visible
        Then I click the “Toll-free numbers” radio btn
        Then I click the “Programmable Voice” radio btn
        Then I should see how the price will change