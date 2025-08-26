/// <reference types="cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('../../lightBox/lightbox.html');
  })

  it('open and close lightbox on click', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('lightbox-opened').should('be.visible');
    cy.get('body').click(0,0);
    cy.getDataCy('lightbox-opened').should('not.visible');
  })

  it('add and delete like and update counter', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('like-count').should('have.text', '0')
    cy.getDataCy('overlay-like-count').should('have.text', '0');
    cy.getDataCy('like-btn').click();
    cy.getDataCy('like-count').should('have.text', '1')
    cy.getDataCy('overlay-like-count').should('have.text', '1');
    cy.getDataCy('dislike-btn').click();
    cy.getDataCy('like-count').should('have.text', '0')
    cy.getDataCy('overlay-like-count').should('have.text', '0');
  })

  it('add comment and update counter', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('comment-count').should('have.text', '0')
    cy.getDataCy('show-comment-btn').should('include.text', '0')
    cy.getDataCy('comment-input').type('Cypress is awesome!');
    cy.getDataCy('add-comment-btn').click()
    cy.getDataCy('comment-body').should('have.text', 'Cypress is awesome!')
    cy.getDataCy('comment-author').should('have.text', 'johndoe')
    cy.getDataCy('comment-count').should('have.text', '1')
    cy.getDataCy('show-comment-btn').should('include.text', '1')
    cy.getDataCy('delete-comment-btn').click();
    cy.getDataCy('comment-count').should('have.text', '0')
    cy.getDataCy('show-comment-btn').should('include.text', '0')
  })

  it('can\'t add comment', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('add-comment-btn').should('be.disabled')
  })

  it('show and hide comment', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('comment-input').type('a');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('comment-body').should('be.visible');
    cy.getDataCy('show-comment-btn').click();
    cy.getDataCy('comment-body').should('not.visible');
    cy.getDataCy('show-comment-btn').click();
    cy.getDataCy('comment-body').should('be.visible');
  })

  it('have plural text', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('comment-input').type('a');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('show-comment-btn').should('include.text', 'comment')
    cy.getDataCy('show-comment-btn').should('not.include.text', 'comments')
    cy.getDataCy('comment-input').type('b');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('show-comment-btn').should('include.text', 'comments')
    cy.getDataCy('delete-comment-btn').eq(1).click();
    cy.getDataCy('show-comment-btn').should('include.text', 'comment')
    cy.getDataCy('show-comment-btn').should('not.include.text', 'comments')
  })

  it('delete right comment', () => {
    cy.getDataCy('lightbox').click();
    cy.getDataCy('comment-input').type('a');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('comment-input').type('b');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('comment-input').type('c');
    cy.getDataCy('add-comment-btn').click();
    cy.getDataCy('comment-body').should('have.length', 3)
    cy.getDataCy('comment-body').eq(0).should('have.text', 'a')
    cy.getDataCy('comment-body').eq(1).should('have.text', 'b')
    cy.getDataCy('comment-body').eq(2).should('have.text', 'c')
    cy.getDataCy('delete-comment-btn').eq(1).click();
    cy.getDataCy('comment-body').should('have.length', 2)
    cy.getDataCy('comment-body').eq(0).should('have.text', 'a')
    cy.getDataCy('comment-body').eq(1).should('have.text', 'c')
  })
})