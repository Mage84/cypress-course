/// <reference types="cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('../../pages/index.html')
  })

  it('has a <p> with Hello world', () => {
    cy.get('p').should('have.text', 'Hello world!')
  })
})