import Conge from '../Models/conge.js';
import Employe from '../Models/employe.js';

export const createConge = async (req, res) => {
    try {
        const { date_conge, type_conge, justification, employe_id } = req.body;
        const newConge = await Conge.create({ date_conge, type_conge, justification, employe_id });
        res.status(201).json(newConge);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a ausência' });
    }
};

export const getAllConges = async (req, res) => {
    try {
        const conges = await Conge.findAll({ include: { model: Employe, as: 'employe' } });
        res.status(200).json(conges);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter as ausências' });
    }
};

export const getCongeById = async (req, res) => {
    try {
        const conge = await Conge.findByPk(req.params.id, { include: { model: Employe, as: 'employe' } });
        res.status(200).json(conge || { error: 'Ausência não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter a ausência' });
    }
};

export const updateConge = async (req, res) => {
    try {
        const { date_conge, type_conge, justification } = req.body;
        const [updated] = await Conge.update(
            { date_conge, type_conge, justification },
            { where: { id: req.params.id } }
        );
        res.status(200).json({ message: updated ? 'Ausência atualizada' : 'Ausência não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a ausência' });
    }
};

export const deleteConge = async (req, res) => {
    try {
        const deleted = await Conge.destroy({ where: { id: req.params.id } });
        res.status(deleted ? 204 : 404).json({ message: deleted ? '' : 'Ausência não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir a ausência' });
    }
};
