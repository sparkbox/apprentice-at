/// <reference types="cypress" />

describe('Should filter Apprenticeships correctly', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const filters = ['development', 'design', 'software', 'mobile']
  it('filters all', function() {
    cy.get(`[data-cy=filters-all]`).click();  
    filters.forEach((filter) => {
      cy.get('[data-cy=item_content-category]').contains(filter)
    })
  });

 
  filters.forEach(selectedFilter => {
    it(`filters ${selectedFilter}`, function() {
      cy.get(`[data-cy=filters-${selectedFilter}]`).click()
      cy.get('[data-cy=item_content-category]').contains(`${selectedFilter}`)
      //only selected filter is displayed
      filters.filter(filter => filter !== selectedFilter).forEach((nonSelectedFilter) => {
        cy.get('[data-cy=item_content-category]:visible').should('not.contain', nonSelectedFilter)
      })
    });
  })
})







