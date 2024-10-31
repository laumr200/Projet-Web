
import Employe from '../Models/Employe.js'; // Import du modèle Employé

// 1. Récupérer tous les employés
export const getAllEmployes = async (req, res) => {
    try {
        const employes = await Employe.findAll({ include: ['role'] });
        res.status(200).json({ data: employes });
    } catch (error) {
        console.error('Erreur lors de la récupération des employés:', error);
        res.status(500).json({ message: "Erreur lors de la récupération des employés" });
    }
};

// 2. Ajouter un employé
export const addEmploye = async (req, res) => {
    try {
        const employe = await Employe.create(req.body);
        res.status(201).json({ data: employe });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'employé:", error);
        res.status(400).json({ message: "Données d'employé invalides" });
    }
};

// 3. Modifier un employé
export const updateEmploye = async (req, res) => {
    try {
        const employe = await Employe.findByPk(req.params.id);
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });

        await employe.update(req.body);
        res.status(200).json({ data: employe });
    } catch (error) {
        console.error("Erreur lors de la modification de l'employé:", error);
        res.status(400).json({ message: "Données d'employé invalides" });
    }
};

// 4. Supprimer un employé
export const delEmploye = async (req, res) => {
    try {
        const result = await Employe.destroy({ where: { id: req.params.id } });
        if (result === 0) return res.status(404).json({ message: "Employé non trouvé" });

        res.status(204).send();
    } catch (error) {
        console.error("Erreur lors de la suppression de l'employé:", error);
        res.status(500).json({ message: "Erreur interne lors de la suppression" });
    }
};