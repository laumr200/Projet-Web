// configure le serveur, importe les routes et synchronise la base de données.
import express from 'express';  // Importer express
import bodyParser from 'body-parser';  // Importer body-parser
import database from './Config/connection.js';  // Importer la connexion à la base de données
import userRoutes from './Routes/Employeroutes.js';  // Importer les routes des utilisateurs
import roleRoutes from './Routes/Roleroutes.js';  // Importer les routes des rôles
import absenceRoutes from './Routes/Absenceroutes.js';  // Importer les routes d'absence


const app = express();  // Créer l'application Express
const PORT = process.env.PORT || 3000;  // Définir le port d'écoute

// Middleware pour analyser le corps des requêtes JSON
app.use(bodyParser.json());

// Routes
app.use('/api/employes', employeRoutes);  
app.use('/api/roles', roleRoutes);       
app.use('/api/absences', absenceRoutes);  

// Synchronisation des modèles avec la base de données
database.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur en cours d'exécution sur le port ${PORT}`);  // Message indiquant que le serveur fonctionne
    });
}).catch(error => {
    console.error(' On nest pas capables de se connecter au database:', error);  // Gérer les erreurs de connexion à la base de données
});
