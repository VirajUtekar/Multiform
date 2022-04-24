
/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class interestPageObject{


    verifyProfileTab(){
        return cy.get(user.interest_elements.profile_tab,{timeout:10000});
    }

    verifyILikeOptions(){
        return cy.get(user.interest_elements.i_like_options,{timeout:10000});
    }

    verifyILikeXBoxCheckbox(){
        return cy.get(user.interest_elements.i_like_Xbox_checbox,{timeout:10000});
    }
    
    verifyILikePs4Checbox(){
        return cy.get(user.interest_elements.i_like_ps4_checkbox,{timeout:10000});
    }

    verifyNextSectionButton(){
        cy.wait(3000);
        return cy.get(user.common_elements.next_section_button,{timeout:10000});
    }
}