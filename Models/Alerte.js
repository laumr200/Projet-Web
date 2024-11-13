import database from "../Config/connection.js";// Import de la connexion à la base de données
import { DataTypes } from "sequelize";// Import des types de données Sequelize
import Employe from "./Employe.js";// Import du modèle Employé pour les relations

// Création du modèle Alerte
const Alerte = database.define('Alerte', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,     // Définit cette colonne comme clé primaire
        autoIncrement: false, // L'ID ne s'incrémente pas automatiquement
        allowNull: false,     // L'ID est obligatoire
    },
    message_alerte: {
        type: DataTypes.STRING,
        allowNull: false, // Le message d'alerte est obligatoire
        
    },
    date_creation: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date de création est obligatoire
    },
    date_expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date d'expiration est obligatoire
    },
    notification_envoyee: { // Indicateur pour savoir si la notification a été envoyée
        type: DataTypes.BOOLEAN,
        allowNull: false, // La notification est obligatoire
    },
    employe_id: { // Clé étrangère pour l'employé
        type: DataTypes.INTEGER,
        references: {
            model: Employe,
            key: 'id',
        },
        onDelete: 'CASCADE', // Supprimer les alertes si l'employé est supprimé
    },
});

// Relation entre Absence et Employe
Alerte.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });

export default Absence;
