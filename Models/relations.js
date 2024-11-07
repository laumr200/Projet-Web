<<<<<<< HEAD
import Employe from '../Models/employe.js';
import Retard from '../Models/retard.js';
import Role from '../Models/Role.js';

Employe.hasMany(Conge, { foreignKey: 'employe_id', as: 'conges' });
Conge.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });

Employe.hasMany(Retard, { foreignKey: 'employe_id', as: 'retards' });
Retard.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });

Employe.belongsToMany(Role, { through: 'EmployeRoles', as: 'roles' });
Role.belongsToMany(Employe, { through: 'EmployeRoles', as: 'employes' });

export { Employe, Conge, Retard, Role };

=======
// Importer les entités sans relations
import Role from "./Role.js";
import Employe from "./Employe.js";
import Absence from "./Absence.js";

// Création des relations

// Relation plusieurs-à-plusieurs entre Employe et Role via une table de liaison 'employe_role'
Role.belongsToMany(Employe, {
    through: 'employe_role',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});
Employe.belongsToMany(Role, {
    through: 'employe_role',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});

// Relation un-à-plusieurs entre Employe et Absence
Employe.hasMany(Absence, {
    foreignKey: 'employe_id', // Clé étrangère dans Absence qui pointe vers Employe
    onDelete: 'CASCADE', // Supprime les absences associées si l'employé est supprimé
    onUpdate: 'RESTRICT', //EMPECHE LA MISSE A JOORVSI L REFERENCEDE L'EMPLOYE EST MODIFIE
});
Absence.belongsTo(Employe, {
    foreignKey: 'employe_id',
    onUpdate:    'RESTRICT',
});

// Exporter les modèles pour les utiliser dans d'autres parties du projet
export { Role, Employe, Absence };
>>>>>>> main
