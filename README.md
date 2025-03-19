# 🛒 Automatisation des Tests pour une Boutique en Ligne avec Cypress
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff) 
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=fff) 
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff) 
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=fff) 
![Twig](https://img.shields.io/badge/Twig-FFDD00?logo=twig&logoColor=000) 
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff) 
![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff)
## 📌 Objectif du Projet
Ce projet vise à automatiser les tests d'une boutique en ligne en utilisant **Cypress**. Il couvre des scénarios essentiels comme la connexion utilisateur, l'affichage des produits, la gestion du panier et les tests API.

## 🚀 Fonctionnalités Testées
🔹 **Tests de connexion** : Vérification de l’authentification utilisateur.  
🔹 **Affichage des produits** : Validation du chargement et de la visibilité des produits.  
🔹 **Gestion du panier** : Ajout et suppression d’articles.  
🔹 **Tests API** : Vérification des requêtes GET et POST sur le backend.  
🔹 **Smoke Tests** : Vérification rapide des fonctionnalités critiques.

## 🛠️ Technologies Utilisées
- **Cypress** : Framework de test E2E.
- **Mocha/Chai** : Assertions et gestion des tests.
- **GitHub Actions** *(optionnel)* : CI/CD pour exécuter les tests automatiquement.

## 📌 Installation et Exécution
1️⃣ **Cloner le repository**  
```bash
git clone https://github.com/akamidev/TesteurLogiciel_Automatisation_Boutique.git
cd TesteurLogiciel_Automatisation_Boutique
```
2️⃣ **Installer les dépendances**

```bash
npm install
```
3️⃣ **Lancer les tests en mode interactif**

```bash
npx cypress open
```
4️⃣ **Lancer les tests en mode headless**

```bash
npx cypress run
```
## 📝 Scénarios de Test Automatisés

| ID    | Scénario                                      | Statut  |
|-------|----------------------------------------------|---------|
| TC001 | Vérification de l’authentification utilisateur | ✅ OK  |
| TC002 | Vérification de l'affichage des produits    | ✅ OK  |
| TC003 | Ajout et suppression d'un produit dans le panier | ✅ OK  |
| TC004 | Validation des erreurs API (401, 403)       | ✅ OK  |
| TC005 | Exécution des smoke tests                   | ✅ OK  |

## 📌 Améliorations Futures

🚀 Intégration des tests dans un pipeline CI/CD (GitHub Actions).
🔄 Ajout de tests de performance.
🔍 Extension des cas de test pour la navigation mobile.

## 🤝 Contributeurs
👤 AKAMI Mehdi - Testeur QA | Automatisation Cypress
🔗 [[Portfolio](https://akamimehdi.netlify.app/Competence)]
