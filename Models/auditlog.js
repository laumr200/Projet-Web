// models/auditlog.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../Config/connection.js'; // Ensure this points to your connection

// Define the AuditLog model
const AuditLog = sequelize.define('AuditLog', {
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

export default AuditLog;
