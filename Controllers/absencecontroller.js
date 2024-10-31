
import Absence from '../Models/Absence.js'; // Import du modèle Absence

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
    try {
        const absence = await Absence.create(req.body);
        res.status(201).json({ data: absence });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'absence:", error);
        res.status(400).json({ message: "Données d'absence invalides" });
    }
};

// 3. Modifier une absence
export const updateAbsence = async (req, res) => {
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
