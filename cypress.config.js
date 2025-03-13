const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080", // URL de base pour tes tests
    setupNodeEvents(on, config) {
      // Tu peux ajouter des événements ici si besoin
    },
    specPattern: "cypress/e2e/**/*.cy.js", // Assure-toi que Cypress trouve tes fichiers de test
  },
});
