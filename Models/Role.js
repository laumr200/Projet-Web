import { DataTypes } from 'sequelize';
import database from '../Config/connection.js';


// Création du modèle Rôle
const Role = database.define('Role', {
    nom_role: {
        type: DataTypes.STRING,
        allowNull: false, // Le nom du rôle est obligatoire
    },
});

export default Role;