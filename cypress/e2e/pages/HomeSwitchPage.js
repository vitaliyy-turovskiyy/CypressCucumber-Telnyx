import { TelnyxHomePage } from '../pages/TelnyxHomePage.js';
export class SwitchSavePage extends TelnyxHomePage  {
    
    constructor() {
        super();
    }
    
    elements ={
        switchSaveWithTelnyx : () => cy.get('h2 [class="mchNoDecorate"]'),
        smsButton : () => cy.get('[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]', { timeout: 10*5000 }),
        telnyxCost : () => cy.get('[class="sc-1a5981e5-12 gVMLpl"]', { timeout: 5000 }),
        twilioCost : () => cy.get('[class="sc-1a5981e5-13 geBsjY"]', { timeout: 5000 }),
        tollFreeNumbers : () => cy.get('[id="toll-free-numbers"]', { timeout: 7000 }),
        programmableVoice : () => cy.get('[id="no"]', { timeout: 5000 }),
        saveUpPerMonth : () => cy.get('[class="sc-1a5981e5-15 OWFfB"]', { timeout: 5000 }), 
    }

    checkSwitchSaveWithTelnyx() {
        this.elements.switchSaveWithTelnyx().scrollIntoView().should('have.text','Switch + Save with Telnyx.');
    }
    clickSMSButton() {
        this.elements.smsButton().click();
    }
    checkTelnyxCost() {
        this.elements.telnyxCost().should('have.text','$2,540');
    }
    checkTwilioCost() {
        this.elements.twilioCost().should('have.text','$4,763');
    }
    clickTollFreeNumberst() {
        this.elements.tollFreeNumbers().click();
    }
    clickProgrammableVoice() {
        this.elements.programmableVoice().click();
    }
    checkSaveUpPerMonth() {
        this.elements.saveUpPerMonth().should('have.text','Save up to $1840 per month');
    }
}
