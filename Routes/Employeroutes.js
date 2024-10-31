import { Router } from 'express';
import { getAllEmployes, addEmploye, updateEmploye, delEmploye } from '../Controllers/employecontroller.js';

const route = Router();
route.get('/', getAllEmployes);
route.post('/', addEmploye);
route.put('/:id', updateEmploye);
route.delete('/:id', delEmploye);

export default route;