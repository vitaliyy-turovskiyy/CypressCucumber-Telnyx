import { TelnyxHomePage } from '../pages/TelnyxHomePage.js';
export class SwitchSavePage extends TelnyxHomePage  {
    
    constructor() {
        super();
    }
    
    elements ={
        SwitchSaveWithTelnyx : () => cy.get('h2 [class="mchNoDecorate"]'),
        SMSButton : () => cy.get('[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]', { timeout: 5000 }),
        TelnyxCost : () => cy.get('[class="sc-1a5981e5-12 gVMLpl"]', { timeout: 5000 }),
        TwilioCost : () => cy.get('[class="sc-1a5981e5-13 geBsjY"]', { timeout: 5000 }),
        TollFreeNumbers : () => cy.get('[id="toll-free-numbers"]', { timeout: 7000 }),
        ProgrammableVoice : () => cy.get('[id="no"]', { timeout: 5000 }),
        SaveUpPerMonth : () => cy.get('[class="sc-1a5981e5-15 OWFfB"]', { timeout: 5000 }), 
    }

    checkSwitchSaveWithTelnyx() {
        this.elements.SwitchSaveWithTelnyx().scrollIntoView().should('have.text','Switch + Save with Telnyx.');
    }
    clickSMSButton() {
        this.elements.SMSButton().click();
    }
    checkTelnyxCost() {
        this.elements.TelnyxCost().should('have.text','$2,540');
    }
    checkTwilioCost() {
        this.elements.TwilioCost().should('have.text','$4,763');
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
