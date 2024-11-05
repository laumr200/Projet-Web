import database from '../Config/connection.js'; // Import de la connexion à la base de données
import { DataTypes } from 'sequelize'; // Import des types de données Sequelize
import Role from './Role.js'; // Import du modèle Rôle pour la relation

// Création du modèle Employé
const Employe = database.define('Employe', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false, // Le nom est obligatoire
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // L'email est obligatoire
        unique: true, // L'email doit être unique
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_d_embauche: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date d'embauche est obligatoire
    },
    role_id: { // Clé étrangère pour le rôle
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id',
        },
        onDelete: 'SET NULL', // Mettre à NULL si le rôle est supprimé
    },
});

// Relation entre Employé et Rôle
Employe.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

export default Employe;