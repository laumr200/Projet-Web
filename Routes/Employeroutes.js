import { Router } from 'express';
import { getAllEmployes, addEmploye, updateEmploye, delEmploye ,getEmployeAbsences, addRoleToEmploye,getEmployeRoles } from '../Controllers/employecontroller.js';

const route = Router();
route.get('/', getAllEmployes);
route.post('/', addEmploye);
route.put('/:id', updateEmploye);
route.delete('/:id', delEmploye);
route.get('/:id/absences', getEmployeAbsences);
route.post('/:id/roles/:roleId', addRoleToEmploye);
route.get('/:id/roles', getEmployeRoles);

export default route;