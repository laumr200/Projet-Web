// controllers/auditlog.js
import AuditLog from '../Models/auditlog.js'; 

export const createAuditLog = async (req, res) => {
  try {
    const { action, userId, details } = req.body; 

    const newAuditLog = await AuditLog.create({
      action,
      userId,
      details,
    });

    res.status(201).json(newAuditLog); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating audit log', error }); 
  }
};
