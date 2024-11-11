// routes/auditlog.js
import express from 'express';
import { createAuditLog } from '../Controllers/auditlog.js';

const router = express.Router();

// POST route to create an audit log entry
router.post('/create', createAuditLog);

export default router;



