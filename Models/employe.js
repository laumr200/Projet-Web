import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Employe = sequelize.define('Employe', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
});

export default Employe;
