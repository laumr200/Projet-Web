import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Employe from './employe.js';

const Retard = sequelize.define('Retard', {
    date_retard: DataTypes.DATE,
    type_retard: DataTypes.STRING,
    justification: DataTypes.TEXT,
    employe_id: DataTypes.INTEGER,
});

Retard.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });
Employe.hasMany(Retard, { foreignKey: 'employe_id', as: 'retards' });

export default Retard;
