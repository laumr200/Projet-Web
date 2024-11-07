import { DataTypes } from 'sequelize';
<<<<<<< HEAD
import sequelize from '../config/database.js';

const Role = sequelize.define('Role', {
    role_name: DataTypes.STRING,
});

export default Role;
=======
import database from '../Config/connection.js';


// Création du modèle Rôle
const Role = database.define('Role', {
    nom_role: {
        type: DataTypes.STRING,
        allowNull: false, // Le nom du rôle est obligatoire
    },
});

export default Role;
>>>>>>> main
