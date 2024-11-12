import database from '../Config/connection.js'; // Import de la connexion à la base de données
import { DataTypes } from 'sequelize'; // Import des types de données Sequelize
import Employe from './Employe.js'; // Import du modèle Employé pour les relations

// Création du modèle Absence
const Absence = database.define('Absence', {
    date_absence: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date d'absence est obligatoire
    },
    type_absence: {
        type: DataTypes.STRING,
        allowNull: false, // Le type d'absence est obligatoire
    },
    justification: {
        type: DataTypes.TEXT,
    },
    employe_id: { // Clé étrangère pour l'employé
        type: DataTypes.INTEGER,
        references: {
            model: Employe,
            key: 'id',
        },
        onDelete: 'CASCADE', // Supprimer les absences si l'employé est supprimé
    },
});

// Relation entre Absence et Employe
Absence.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });

export default Absence;
