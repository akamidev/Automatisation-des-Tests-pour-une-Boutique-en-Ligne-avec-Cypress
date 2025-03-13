describe('Tests API', () => {
    it('Vérifie qu’un utilisateur non connecté ne peut pas accéder aux commandes', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/orders',
        failOnStatusCode: false
      }).its('status').should('eq', 401)
    })
  
    it('Vérifie la récupération des produits', () => {
      cy.request('GET', 'http://localhost:8081/products').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
    })
  })
  