import {Role} from '../Models/relations.js'; // Import du modèle Rôle
import {validationResult} from "express-validator";

// 1. Récupérer tous les rôles
export const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ data: roles });
    } catch (error) {
        console.error('Erreur lors de la récupération des rôles:', error);
        res.status(500).json({ message: "Erreur lors de la récupération des rôles" });
    }
};

// 2. Ajouter un rôle
export const addRole = async (req, res) => {
    // Vérification de la validation des données
    const errors = validationResult(req);  // Validation via express-validator
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Retourner les erreurs si la validation échoue
    }

    try {
        const role = await Role.create(req.body);  // Créer un nouveau rôle
        res.status(201).json({ data: role });
    } catch (error) {
        console.error("Erreur lors de l'ajout du rôle:", error);
        res.status(400).json({ message: "Données de rôle invalides" });
    }
};

// 3. Modifier un rôle
export const updateRole = async (req, res) => {
    // Vérification de la validation des données
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Retourner les erreurs si la validation échoue
    }

    try {
        const role = await Role.findByPk(req.params.id);  // Trouver le rôle par ID
        if (!role) return res.status(404).json({ message: "Rôle non trouvé" });

        await role.update(req.body);  // Mettre à jour le rôle
        res.status(200).json({ data: role });
    } catch (error) {
        console.error("Erreur lors de la modification du rôle:", error);
        res.status(400).json({ message: "Données de rôle invalides" });
    }
};

// 4. Supprimer un rôle
export const delRole = async (req, res) => {
    try {
        const result = await Role.destroy({ where: { id: req.params.id } });
        if (result === 0) return res.status(404).json({ message: "Rôle non trouvé" });

        res.status(204).send();
    } catch (error) {
        console.error("Erreur lors de la suppression du rôle:", error);
        res.status(500).json({ message: "Erreur interne lors de la suppression" });
    }
};