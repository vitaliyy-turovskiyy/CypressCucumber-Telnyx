export class SwitchSavePage {
    
    elements ={

        SwitchSaveWithTelnyx : () => cy.get('h2 [class="mchNoDecorate"]'),
        SMSButton : () => cy.get('[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]').wait(7000),
        TelnyxCost : () => cy.get('[class="sc-1a5981e5-12 gVMLpl"]'),
        TwilioCost : () => cy.get('[class="sc-1a5981e5-13 geBsjY"]'),
        TollFreeNumbers : () => cy.get('[id="toll-free-numbers"]').wait(7000),
        ProgrammableVoice : () => cy.get('[id="no"]'),
        SaveUpPerMonth : () => cy.get('[class="sc-1a5981e5-15 OWFfB"]'),
       
    }

    checkSwitchSaveWithTelnyx() {
        this.elements.SwitchSaveWithTelnyx().scrollIntoView().should('have.text','Switch + Save with Telnyx.');
    }
    clickSMSButton() {
        this.elements.SMSButton().click();
    }
    checkTelnyxCost() {
        this.elements.TelnyxCost().wait(5000).should('have.text','$2,540');
    }
    checkTwilioCost() {
        this.elements.TwilioCost().wait(5000).should('have.text','$4,763');
    }
    clickTollFreeNumberst() {
        this.elements.TollFreeNumbers().click();
    }
    clickProgrammableVoice() {
        this.elements.ProgrammableVoice().wait(5000).click();
    }
    checkSaveUpPerMonth() {
        this.elements.SaveUpPerMonth().wait(5000).should('have.text','Save up to $1840 per month');
    }
}
