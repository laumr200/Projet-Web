import express from 'express';
import { getRapports } from '../../controllers/rapportdaciduite.js';

const router = express.Router();

router.get('/rapports', getRapports);

export default router;