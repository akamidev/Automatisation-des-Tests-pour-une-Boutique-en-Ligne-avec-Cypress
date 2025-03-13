describe('Smoke Tests', () => {
  it('Vérifie que la page d’accueil charge correctement', () => {
    cy.visit('http://localhost:8080')
    cy.get('nav').should('be.visible')
    cy.get('footer').should('be.visible')
    cy.get('Logo EcoBlissBath').should('exist')
    cy.get('.btn-login').should('be.visible')
  })
})
