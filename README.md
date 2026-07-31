# 💰 StateMoney

## 📌 Description

StateMoney est une application de gestion financière personnelle qui aide les utilisateurs à suivre leurs revenus, dépenses et objectifs d’épargne. Elle permet de gérer plusieurs portefeuilles, d’analyser les habitudes financières et d’automatiser les transactions récurrentes grâce à une interface moderne et intuitive.

---

# ✨ Fonctionnalités

## 🔐 Authentification

Un système d'authentification sécurisé permettant à chaque utilisateur d'accéder à ses propres données financières.

Fonctionnalités :
- Création de compte
- Connexion utilisateur
- Gestion des sessions
- Protection des données personnelles

---

## 👛 Gestion des portefeuilles

Les utilisateurs peuvent gérer différentes sources d'argent depuis une seule application.

Exemples :
- Compte bancaire
- Espèces
- Mobile Money
- Compte épargne

Fonctionnalités :
- Création de portefeuilles
- Modification des portefeuilles
- Suppression des portefeuilles
- Consultation des soldes
- Visualisation du solde total disponible

---

## 💸 Gestion des transactions

La fonctionnalité principale de StateMoney.

Les utilisateurs peuvent enregistrer tous leurs mouvements financiers.

Chaque transaction contient :
- Un montant
- Une date
- Un type (revenu ou dépense)
- Un portefeuille associé
- Une catégorie
- Une description

Fonctionnalités :
- Ajouter une transaction
- Modifier une transaction
- Supprimer une transaction
- Consulter les détails d'une transaction

---

## 🏷️ Gestion des catégories

Les utilisateurs peuvent organiser leurs transactions grâce à des catégories personnalisables.

Exemples :
- 🍔 Alimentation
- 🚕 Transport
- 🎓 Études
- 🏠 Logement
- 🎮 Loisirs

Fonctionnalités :
- Créer des catégories
- Modifier des catégories
- Supprimer des catégories
- Associer des catégories aux transactions

---

## 📊 Tableau de bord financier

Une vue centralisée permettant de visualiser rapidement la situation financière de l'utilisateur.

Le tableau de bord affiche :

### 💰 Solde total

Vue globale de l'argent disponible dans l'ensemble des portefeuilles.

---

### 📥 Revenus du mois

Affichage du montant total des revenus reçus durant le mois actuel.

Les revenus sont également répartis par source.

Exemple :

- 💼 Salaire : 2 000 000 Ar
- 💻 Freelance : 300 000 Ar
- 🎁 Autres : 200 000 Ar

---

### 📤 Dépenses du mois

Affichage du montant total des dépenses effectuées durant le mois actuel.

Les dépenses sont regroupées par catégorie.

Exemple :

- 🍔 Alimentation : 350 000 Ar
- 🚕 Transport : 180 000 Ar
- 🎓 Études : 150 000 Ar
- 🎮 Loisirs : 170 000 Ar

---

### 💵 Épargne du mois

Affichage du montant économisé durant le mois.

Calcul :

Épargne = Revenus - Dépenses

---

### 📜 Historique des transactions

Affichage de l'ensemble des transactions enregistrées.

Fonctionnalités :
- Affichage de toutes les transactions
- Recherche de transactions
- Filtrage avancé

Filtres disponibles :
- Date
- Portefeuille
- Catégorie
- Montant
- Type de transaction (revenu/dépense)

Cette fonctionnalité permet de retrouver rapidement une transaction parmi un grand nombre d'enregistrements.

---

## 🎯 Objectifs financiers

Les utilisateurs peuvent définir des objectifs d'épargne afin de préparer leurs futurs projets financiers.

Exemples :

* Acheter un ordinateur
* Préparer un voyage
* Constituer une épargne de sécurité

Chaque objectif contient :

* Un nom
* Un montant cible

Le montant déjà épargné correspond automatiquement au **solde total** de l'ensemble des portefeuilles de l'utilisateur.

Le montant restant à épargner est calculé automatiquement :

```text
Reste à épargner = Montant cible − Solde total
```

Exemple :

```text
💰 Solde total : 2 700 000 Ar

Objectif : Acheter un ordinateur

Montant cible : 4 000 000 Ar

Montant déjà épargné : 2 700 000 Ar

Reste à épargner : 1 300 000 Ar
```

Cette fonctionnalité permet à l'utilisateur de comparer rapidement son épargne actuelle avec le montant nécessaire pour atteindre chacun de ses objectifs.


---

## 🔁 Transactions récurrentes

Les utilisateurs peuvent automatiser la gestion des transactions qui se répètent régulièrement afin d'éviter de les saisir manuellement à chaque occurrence.

Exemples :
- 💼 Salaire mensuel
- 🏠 Loyer
- 🌐 Abonnement Internet
- 🎵 Abonnement à un service

Chaque transaction récurrente contient :
- Un nom
- Un montant
- Un type (revenu ou dépense)
- Une catégorie
- Un portefeuille associé
- Une fréquence (quotidienne, hebdomadaire, mensuelle, annuelle)
- Une date de prochaine exécution

Fonctionnalités :
- Créer une transaction récurrente
- Modifier une transaction récurrente
- Supprimer une transaction récurrente
- Générer automatiquement les transactions selon la fréquence définie
- Mettre à jour la prochaine date d'exécution après chaque génération

Exemple :

Transaction récurrente :

Nom : Abonnement Internet

Montant : 50 €

Type : Dépense

Fréquence : Mensuelle

Prochaine exécution : 05/08/2026

Lorsque la date d'exécution arrive, l'application crée automatiquement une nouvelle transaction dans l'historique.

Cette fonctionnalité permet de simplifier le suivi des revenus et dépenses réguliers tout en conservant un historique financier complet.

---

# 🛠️ Stack technique

## Frontend

- React
- TypeScript
- React Hooks
- React Router
- Axios

## Backend

- Node.js
- Express
- TypeScript
- API REST

## Base de données

- PostgreSQL

## Tests

- Jest
- Cypress

---

# 🎯 Objectifs du projet
Être capable de créer une interface non-bloquante, réactive et dynamique.

Apprendre :

- Bases de React : Introduction, Lifecycle, Virtual DOM et ES, Virtual DOM, Hooks, Microservice API REST, Backend express, interaction avec une base données
- Typescript : Introduction & configuration, Types,
- Tests au niveau du front-end : JEST, Cypress

Ajouter ce projet dans son portfolio
---

# 🚀 Améliorations futures possibles

Évolutions possibles :

- Mode sombre
- Export des rapports financiers
- Notifications
- Gestion multi-devises
- Prévisions financières avancées
- Suggestions intelligentes basées sur les habitudes de dépenses