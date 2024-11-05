// configure le serveur, importe les routes et synchronise la base de données.
import express from 'express';             // Importer express
import bodyParser from 'body-parser';       // Importer body-parser
import cors from 'cors';                    // Importer cors
import helmet from 'helmet';                // Importer helmet
import compression from 'compression';      // Importer compression
import dotenv from 'dotenv';                // Importer dotenv

//importer la connexion a la base de donnees
import database from './Config/connection.js';  // Importer la connexion à la base de données

// Importer les routes
import employeRoutes from './Routes/Employeroutes.js';
import roleRoutes from './Routes/Roleroutes.js';
import absenceRoutes from './Routes/Absenceroutes.js';


//Creation du serveur
const app = express();

//Utiliser les librairies
app.use(cors());                    // Activer CORS
app.use(helmet());                  // Protéger l'application avec Helmet
app.use(compression());             // Compresser les réponses
app.use(bodyParser.json());         // Middleware pour analyser le corps des requêtes JSON
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/api/employes', employeRoutes);    // Routes pour les employés
app.use('/api/roles', roleRoutes);          // Routes pour les rôles
app.use('/api/absences', absenceRoutes);    // Routes pour les absences

// Charger les variables d'environnement
dotenv.config();


//Demarrer les serveur
const PORT =dotenv.config().parsed.PORT
app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))
