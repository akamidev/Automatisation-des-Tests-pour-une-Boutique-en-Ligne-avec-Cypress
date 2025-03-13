# 🛒 Automatisation des Tests pour une Boutique en Ligne avec Cypress

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
