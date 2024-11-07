import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Employe from './Employe.js';


const Conge = sequelize.define('Conge', {
    date_conge: DataTypes.DATE,
    type_conge: DataTypes.STRING,
    justification: DataTypes.TEXT,
    employe_id: DataTypes.INTEGER,
});

Conge.belongsTo(Employe, { foreignKey: 'employe_id', as: 'employe' });
Employe.hasMany(Conge, { foreignKey: 'employe_id', as: 'conges' });

export default Conge;
