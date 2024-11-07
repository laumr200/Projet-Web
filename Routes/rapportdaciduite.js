import express from 'express';
import { getRapports } from '../Controllers/rapportdaciduite.js';
const route= express.Router();

route.get('/rapports', getRapports);

export default route;