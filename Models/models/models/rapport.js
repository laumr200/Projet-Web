const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Rapport = sequelize.define('Rapport', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    absences: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    retards: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conges: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'rapports',
    timestamps: false
});

module.exports = Rapport;
