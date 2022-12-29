export class SwitchSavePage {
    
    elements ={

        SwitchSaveWithTelnyx : () => cy.get('h2 [class="mchNoDecorate"]'),
        SMSButton : () => cy.get('[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]'),
        TelnyxCost : () => cy.get('[class="sc-1a5981e5-12 gVMLpl"]'),
        TwilioCost : () => cy.get('[class="sc-1a5981e5-13 geBsjY"]'),
        TollFreeNumbers : () => cy.get('[id="toll-free-numbers"]'),
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
        this.elements.TelnyxCost().wait(2500).should('have.text','$2,540');
    }
    checkTwilioCost() {
        this.elements.TwilioCost().wait(2500).should('have.text','$4,763');
    }
    clickTollFreeNumberst() {
        this.elements.TollFreeNumbers().click();
    }
    clickProgrammableVoice() {
        this.elements.ProgrammableVoice().click();
    }
    checkSaveUpPerMonth() {
        this.elements.SaveUpPerMonth().should('have.text','Save up to $1840 per month');
    }
}
