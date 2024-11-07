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

