/// <reference types="cypress" />
import LoginPage from '../../../fixtures/Brand/login/login.page';
import HomePage from '../../../fixtures/Creator/home/home';
import PlanPage from '../../../fixtures/Brand/plan/plan';

describe('plans', () => {
    beforeEach(() => {
      cy.visit('https://new.flatlay.io');
    })
  
    it('User should be able to see 4 monthly plans. FL-66', () => {
      LoginPage.loginBrand('qalesson@gmail.com', 'qalesson@gmail.com');
      cy.contains('Home',{timeout: 60000});
      HomePage.upgradeBtn.click({force: true});
      PlanPage.planCards.should('have.length', 4);  
    })

    it('User should be able to see 4 yearly plans on "Plans" page. FL-67', () => {
       LoginPage.loginBrand('qalesson@gmail.com', 'qalesson@gmail.com');
       cy.contains('Home',{timeout: 60000});
       HomePage.upgradeBtn.click({force: true});
       PlanPage.switchToYearBtn.click();
       PlanPage.planCards.should('have.length', 4);
       PlanPage.planCardBasic.contains('BASIC');
       PlanPage.planCardBasic.contains('FREE');
       PlanPage.planCardEnterprize.contains('ENTERPRISE');
       PlanPage.planCardPro.contains('PRO');
       PlanPage.planCardPro.contains('99');
       PlanPage.planCardPremium.contains('PREMIUM');
       PlanPage.planCardPremium.contains('299');

    })

    it('Should have PRO $99 as a current plan, FL-268', () => {
        LoginPage.loginBrand('qalesson@gmail.com', 'qalesson@gmail.com');
        cy.contains('Home',{timeout: 60000});
        HomePage.upgradeBtn.click({force: true});
        PlanPage.currentPlan99.contains('Current plan');
     })

     it('Should see "Failed Voucher is Invalid or Expired!" upon attempt to use incorrect voucher, FL-269', () => {
        LoginPage.loginBrand('qalesson@gmail.com', 'qalesson@gmail.com');
        cy.contains('Home',{timeout: 60000});
        HomePage.upgradeBtn.click({force: true});
        PlanPage.InputVaucherValue('12345');
        cy.contains('Failed');
     })
    })
  