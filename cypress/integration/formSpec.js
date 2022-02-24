/// <reference types="cypress" />

describe('Apprenticeship submit form', () => {
    beforeEach(()=> {
        cy.visit('/submit/')
    })
    
    describe('Return correct error validation', () => {
        //should return correct error validation
        it('should return error for incorrect compensation field', () => {
            cy.get('[data-cy=form_compensation-field]')
            .check('No');
            cy.contains('Your apprenticeship must be paid')
            .should('be.visible')
        })
    
        it('should return error for invalid company url', () => {
            cy.get('[data-cy=form_company-website-field]')
            .type('company.com')
            .blur()
            cy.contains('Please be sure your URL is written in this format: http://www.example.com')
            .should('be.visible')
        })
    
        it('should return error for invalid duration less than 0', () => {
            cy.get('[data-cy=form_duration-field]')
            .type('-1')
            .blur()
            cy.contains('Please enter a number greater than 0')
            .should('be.visible')
        })
    
        it('should return error for invalid application link url', () => {
            cy.get('[data-cy=form_learn-more-field]')
            .type('aplicationlink.com')
            .blur()
            cy.contains('Please be sure your URL is written in this format: http://www.example.com')
            .should('be.visible')
        })
    
        it('should return error for invalid past apprentice email', () => {
            cy.get('[data-cy=form_refferral-field]')
            .type('past.apprenticeemail')
            .blur()
            cy.contains('Please enter a valid email address')
            .should('be.visible')
        })
    
        it('should return error for invalid personal email', () => {
            cy.get('[data-cy=form_email-field]')
            .type('myemail')
            .blur()
            cy.contains('Please enter a valid email address')
            .should('be.visible')
        })
    
        //all fields should be required
        it('should return error all fields are required', () => {
            cy.get('[data-cy=form_button-field]')
            .click();
            cy.contains('Please enter your company name');
            cy.contains('Please enter your company website');
            cy.contains('Please select a category');
            cy.contains('Please enter a duration');
            cy.contains('Please enter a link to the application');
            cy.contains('Please enter a past apprentice email');
            cy.contains('Please enter an email address');
        })
    })

    describe('Should submit a successful form', () => {
        it('should submit a successful aprrenticeship form', () => {
            cy.get('[data-cy=form_compensation-field]')
            .should('be.visible')
            .check('Yes');
    
            cy.get('[data-cy=form_company-field]')
            .should('be.visible')
            .type('My Company Name');
    
            cy.get('[data-cy=form_company-website-field]')
            .should('be.visible')
            .type('https://mycompany.com');
    
            cy.get('[data-cy=form_category-field]')
            .should('be.visible')
            .select('Software');
            
            cy.get('[data-cy=form_duration-field]')
            .should('be.visible')
            .type('5');
    
            cy.get('[data-cy=form_summary-field]')
            .should('be.visible')
            .type('This is a summary of the Apprenticeship position available.');
    
            cy.get('[data-cy=form_location-field]')
            .should('be.visible')
            .type('Boston, MA');
    
            cy.get('[data-cy=form_learn-more-field')
            .should('be.visible')
            .type('https://theapprenticeship.com');
    
            cy.get('[data-cy=form_refferral-field]')
            .should('be.visible')
            .type('past.apprenticeship@gmail.com');
    
            cy.get('[data-cy=form_email-field]')
            .should('be.visible')
            .type('my.email@gmail.com');
    
            cy.get('[data-cy=form_button-field]')
            .should('be.visible')
            .click();
    
            cy.url()
            .should('include', '/thank-you/')
        })
    })

})