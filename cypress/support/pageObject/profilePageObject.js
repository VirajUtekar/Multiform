
/// <reference types="cypress" />

var user = require('../../fixtures/user.json');

export default class profilePageObject{

    navigateToUrl(){
        return cy.visit(user.site_url.url, {timeout:10000});
    }

    verifyProfileTabIsSelected(){
        return cy.get(user.profile_elements.profile_tab,{timeout:10000}); 
    }

    verifyNameField(){
        return cy.get(user.profile_elements.name_field,{timeout:10000});
    }
    
    verifyEmailField(){
        return cy.get(user.profile_elements.email_field,{timeout:10000});
    }

    verifyNextSectionSubmit(){
        return cy.get(user.common_elements.next_section_button,{timeout:10000});
    }

    verifyResponseFromServer(){
        return cy.get(user.profile_elements.server_response,{timeout:10000});
    }

}

