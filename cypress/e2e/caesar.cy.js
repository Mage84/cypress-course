/// <reference types="cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('../../caesar/index.html');
  })

  it('cypher Hello world to Nkrru cuxrj!', () => {
    cy.get('input').type('6');
    cy.get('textarea').type('Hello world!');
    cy.get('button').click();
    cy.get('#result').should('have.text', 'Nkrru cuxrj!')
  })
})