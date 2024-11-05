import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../Config/connection.js';

const Rapport = sequelize.define('Rapport', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

export default Rapport;