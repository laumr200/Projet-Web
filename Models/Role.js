import { DataTypes } from 'sequelize';
import database from '../Config/connection.js';


// Création du modèle Rôle
const Role = database.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,     // Définit cette colonne comme clé primaire
        autoIncrement: false, // L'ID ne s'incrémente pas automatiquement
        allowNull: false,     // L'ID est obligatoire
    },
    nom_role: {
        type: DataTypes.STRING,
        allowNull: false, // Le nom du rôle est obligatoire
    },
});

export default Role;