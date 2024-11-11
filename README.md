# Projet-Web

## Partie Authentification, Rapports d'Assiduité et Audit

### Description du projet
Ce projet est un système de gestion des absences et des retards des employés d'une entreprise. Le système comprend l'authentification via JWT, l'enregistrement des absences, le suivi des retards, la gestion des congés, la génération de rapports d'assiduité, et un système d'audit pour suivre les actions des utilisateurs.

---

### Tables de la base de données

Le projet comprend plusieurs tables pour suivre l'assiduité, l'authentification des utilisateurs et pour enregistrer les actions des utilisateurs dans un système d'audit :

- **Utilisateurs (Users)** : Table qui contient les informations des utilisateurs (employés), y compris leur nom, email, mot de passe et rôle (pour l'authentification).
- **Rapports d'Assiduité (Rapports)** : Table qui contient les rapports des employés, y compris le titre, le contenu du rapport et des métadonnées comme les dates de création et de mise à jour.
- **Audit Log (Auditlog)** : Table qui contient les logs d'audit concernant les actions effectuées par les utilisateurs dans le système, telles que la création de rapports, les mises à jour, etc. Cela permet de suivre l'historique des opérations dans le système pour garantir la traçabilité.

---

### **Endpoints de l'API**

#### Authentification

- **Route** : `POST /api/auth/login`
- **Description** : Permet aux utilisateurs de se connecter et de recevoir un token JWT pour accéder aux routes protégées de l'application. Ce token est nécessaire pour toutes les actions nécessitant une authentification.

**Réponse réussie** :  
  - `200 OK`
  - Contenu : `{"token": "jwt_token_here"}`

**Réponse échouée** :  
  - `401 Unauthorized` si les informations d'identification sont incorrectes.

---

#### Rapports d'Assiduité

- **Route** : `GET /api/rapports/rapports`
- **Description** : Permet de récupérer les rapports d'assiduité des employés. Cette route est protégée et nécessite une authentification avec un token JWT valide.

**Réponse réussie** :  
  - `200 OK`
  - Contenu : `[{ "id": 1, "title": "Rapport mensuel", "content": "Détails des absences et retards." }]`

**Réponse échouée** :  
  - `403 Forbidden` si l'utilisateur n'est pas authentifié.

---

#### Audit Log

- **Route** : `POST /api/auditlog/create`
- **Description** : Permet de créer une entrée dans les logs d'audit. Cette fonctionnalité enregistre les actions des utilisateurs pour garder un historique des opérations effectuées dans l'application, comme la création de rapports, la mise à jour de l'état des congés, etc.

**Réponse réussie** :  
  - `201 Created`
  - Contenu : `{ "id": 1, "action": "Rapport créé", "userId": 1, "details": "Rapport mensuel créé pour l'employé X." }`

**Réponse échouée** :  
  - `500 Internal Server Error` en cas d'échec de la création du log.

---


