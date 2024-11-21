
import   {Absence}  from '../Models/relations.js';// Import du modèle Absence
import {validationResult} from "express-validator";


// 1. Récupérer toutes les absences
export const getAllAbsences = async (req, res) => {
    try {
        const absences = await Absence.findAll();
        res.status(200).json({ data: absences });
    } catch (error) {
        console.error('Erreur lors de la récupération des absences:', error);
        res.status(500).json({ message: "Erreur lors de la récupération des absences" });
    }
};

// 2. Ajouter une absence
export const addAbsence = async (req, res) => {
     // Vérification des erreurs de validation
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }
    try {
        const { absences } = req.body;

        // Création en masse des absences
        const createdAbsences = await Absence.bulkCreate(absences, { validate: true });

        res.status(201).json({ message: "Absences ajoutées avec succès", data: createdAbsences });
    } catch (error) {
        console.error("Erreur lors de l'ajout des absences:", error);
        res.status(400).json({ message: "Erreur lors de l'ajout des absences", error: error.message });
    }
};

// 3. Modifier une absence
export const updateAbsence = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const absence = await Absence.findByPk(req.params.id);
        if (!absence) return res.status(404).json({ message: "Absence non trouvée" });

        await absence.update(req.body);
        res.status(200).json({ data: absence });
    } catch (error) {
        console.error("Erreur lors de la modification de l'absence:", error);
        res.status(400).json({ message: "Données d'absence invalides" });
    }
};

// 4. Supprimer une absence
export const delAbsence = async (req, res) => {
    try {
        const result = await Absence.destroy({ where: { id: req.params.id } });
        if (result === 0) return res.status(404).json({ message: "Absence non trouvée" });

        res.status(204).send();
    } catch (error) {
        console.error("Erreur lors de la suppression de l'absence:", error);
        res.status(500).json({ message: "Erreur interne lors de la suppression" });
    }
};
