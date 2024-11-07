import { Router } from 'express';
import { getAllRoles, addRole, updateRole, delRole } from '../Controllers/rolecontroller.js';

const route = Router();
route.get('/', getAllRoles);
route.post('/', addRole);
route.put('/:id', updateRole);
route.delete('/:id', delRole);

export default route;
