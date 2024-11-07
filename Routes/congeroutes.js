import express from 'express';
import { createConge, getAllConges, getCongeById, updateConge, deleteConge } from '../controllers/conge.js';

const router = express.Router();

// Rota para criar uma nova ausência
router.post('/', createConge);

// Rota para obter todas as ausências
router.get('/', getAllConges);

// Rota para obter uma ausência específica por ID
router.get('/:id', getCongeById);

// Rota para atualizar uma ausência por ID
router.put('/:id', updateConge);

// Rota para excluir uma ausência por ID
router.delete('/:id', deleteConge);

export default router;
