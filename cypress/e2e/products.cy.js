describe('Affichage des Produits', () => {
    it('Vérifie l’affichage des produits', () => {
      cy.visit('http://localhost:8080')
      cy.get('.product-card').should('have.length.greaterThan', 0)
      cy.get('.product-card').first().within(() => {
        cy.get('.product-title').should('be.visible')
        cy.get('.product-price').should('be.visible')
      })
    })
  })
  