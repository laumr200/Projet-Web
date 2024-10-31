//Configuration de la connection a la basse de donnees 
import { Sequelize } from 'sequelize';

// Configuration de la base de données
const database = new Sequelize('gestion_absences_retards', 'Laura', 'Laura', {
    host: 'localhost', // ou l'adresse de ton serveur de base de données
    dialect: 'mysql',  // Utiliser le dialecte MySQL
    logging: false,    // Désactive l'affichage des requêtes SQL
});

// Test de la connexion à la base de données
const testConnection = async () => {
    try {
        await database.authenticate();
        console.log('Connexion à la base de données réussie !');
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error);
    }
};

testConnection();

export default database;

