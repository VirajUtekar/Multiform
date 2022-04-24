
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import ProfilePageObject from  '../../support/pageObject/profilePageObject';
import InterestPageObject from '../../support/pageObject/interestPageObject';

var user = require('../../fixtures/user.json');

const ppo = new ProfilePageObject();
const interestpageObj = new InterestPageObject();

Given("navigate to site url",async() =>{
    await ppo.navigateToUrl();
})

Then("verify profile tab is selected", async()=>{
    await ppo.verifyProfileTabIsSelected().should('have.class','active');
})

Then("enter username into username field", async()=>{
    await ppo.verifyNameField().clear();
    await ppo.verifyNameField().type(user.profile_value.name);
})

Then("enter email into email field", async()=>{
    await ppo.verifyEmailField().clear();
    await ppo.verifyEmailField().type(user.profile_value.email);
})

When("click on next section",async()=>{
    await ppo.verifyNextSectionSubmit().click({force:true});
})

Then("verify user lands on interest section",async()=>{
    await cy.get(user.interest_elements.profile_tab,{timeout:10000}).should('have.class','active');
})
