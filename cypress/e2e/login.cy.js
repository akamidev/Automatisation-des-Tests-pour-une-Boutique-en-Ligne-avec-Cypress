describe('Test de Connexion', () => {
    it('Doit se connecter avec des identifiants valides', () => {
      cy.visit('http://localhost:8080/login')
      cy.get('#email').type('ton-email')
      cy.get('#password').type('your-password')
      cy.get('.btn-submit').click()
      cy.url().should('include', '/dashboard')
      cy.get('.btn-logout').should('be.visible')
    })
  
    it('Doit afficher une erreur avec des identifiants incorrects', () => {
      cy.visit('http://localhost:8080/login')
      cy.get('#email').type('invalide@test.com')
      cy.get('#password').type('mauvaismdp')
      cy.get('.btn-submit').click()
      cy.get('.error-message').should('contain', 'Identifiants incorrects')
    })
  })
  
