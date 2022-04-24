
import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import ProfilePageObject from '../../support/pageObject/profilePageObject';
import InterestPageObject from '../../support/pageObject/interestPageObject';

var user = require('../../fixtures/user.json');

const ppo = new ProfilePageObject();
const ipo = new InterestPageObject();

Given("navigate to site url",async()=>{
    await ppo.navigateToUrl();
})

Then("click on profile tab",async()=>{
    await ipo.verifyProfileTab().click({force:true});
})

When("click on i like XBox option",()=>{
   ipo.verifyILikeOptions().then(async (values) =>{
      let consoleval = values.text().toString().replace("I like").replace("I like").trim();
        if(consoleval.includes(user.interest_value.XBox_label)){
           await ipo.verifyILikeXBoxCheckbox().click({force:true});
        }
        else{
           cy.log("Something went wrong, no two options are available !!!");
        }
    })
})

Then("i like XBox option should be enabled", async()=>{
    await ipo.verifyILikeXBoxCheckbox().should('be.enabled');
})

When("click on i like Ps4 option", async()=>{
    ipo.verifyILikeOptions().then(async (values) =>{
        let consoleval = values.text().toString().replace("I like").replace("I like").trim();
          if(consoleval.includes(user.interest_value.PS4_Label)){
             await ipo.verifyILikePs4Checbox().click({force:true});
          }
          else{
             cy.log("Something went wrong, no two options are available !!!");
          }
      })
})

Then("i like Ps4 option should be enabled", async()=>{
    await ipo.verifyILikePs4Checbox().should('be.enabled');
})

Then("click on next section",async()=>{
    await ipo.verifyNextSectionButton().click({multiple:true});
})
