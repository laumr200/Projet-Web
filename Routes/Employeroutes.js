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
