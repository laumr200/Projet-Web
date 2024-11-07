<<<<<<< HEAD
import express from 'express';
import { createEmploye, getAllEmployes, getEmployeById, updateEmploye, deleteEmploye } from '../Controllers/employecontroller.js';

const router = express.Router();

// Definir as rotas para employes
router.post('/', createEmploye);          // Criar novo employe
router.get('/', getAllEmployes);          // Listar todos os employes
router.get('/:id', getEmployeById);       // Obter employe específico por ID
router.put('/:id', updateEmploye);        // Atualizar employe por ID
router.delete('/:id', deleteEmploye);     // Excluir employe por ID

export default router;
=======
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
>>>>>>> main
