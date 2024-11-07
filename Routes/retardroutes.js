import express from 'express';
import { createRetard, getAllRetards, getRetardById, updateRetard, deleteRetard } from '../Controllers/retardcontroller.js';

const router = express.Router();

// Definir as rotas para retards
router.post('/', createRetard);         // Criar novo retard
router.get('/', getAllRetards);         // Listar todos os retards
router.get('/:id', getRetardById);      // Obter retard específico por ID
router.put('/:id', updateRetard);       // Atualizar retard por ID
router.delete('/:id', deleteRetard);    // Excluir retard por ID

export default router;