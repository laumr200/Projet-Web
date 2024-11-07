
import { Employe ,conge , Role } from '../Models/relations.js' // Import du modèle Employé

// 1. Liste des employés
export const getAllEmployes = async (req, res) => {
    try {
        const employes = await Employe.findAll({ include: ['role'] });
        res.status(200).json({ data: employes });
    } catch (error) {
        console.error('Erreur lors de la récupération des employés:', error);
        res.status(400).json({ message: error.message });
    }
};

// 2. Ajout d'un employé
export const addEmploye = async (req, res) => {
    const newEmploye = req.body;
    try {
        const employe = await Employe.create(newEmploye);
        res.status(201).json({ data: employe });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};

// 3. Suppression d'un employé
export const delEmploye = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Employe.destroy({ where: { id } });
        if (result === 0) return res.status(404).json({ message: "Employé non trouvé" });
        res.status(200).json({ message: "Employé supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};

// 4. Profil d'un employé trouve par son id
export const findEmploye = async (req, res) => {
    const { id } = req.params;
    try {
        const employe = await Employe.findByPk(id, { include: 'role' });
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });
        res.status(200).json({ data: employe });
    } catch (error) {
        console.error("Erreur lors de la récupération de l'employé:", error);
        res.status(400).json({ message: `Employé non trouvé: ${error.message}` });
    }
};

// 5. Modification d'un employé
export const updateEmploye = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const employe = await Employe.findByPk(id);
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });

        await employe.update(updateData);
        res.status(200).json({ data: employe });
    } catch (error) {
        console.error("Erreur lors de la modification de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};

// 6. Récupérer les absences d'un employé spécifique
export const getEmployecomge = async (req, res) => {
    const { id } = req.params; // Récupérer l'ID de l'employé depuis les paramètres de la requête

    try {
        // Trouver l'employé et inclure ses absences
        const employe = await Employe.findByPk(id, {
            include: conge
        });
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });

        res.status(200).json({ data: employe.Absences });
    } catch (error) {
        console.error("Erreur lors de la récupération des absences de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};


//  7. Associer le retard employé
export const addRoleToEmploye = async (req, res) => {
    const { employeId, roleId } = req.params;
    try {
        const employe = await Employe.findByPk(employeId);
        const retard = await Role.findByPk(roleId);

        if (!employe || !retard) {
            return res.status(404).json({ message: "Employé ou rôle non trouvé" });
        }

        await employe.addRole(retard); // Ajoute le retard à l'employé
        res.status(200).json({ message: "Retad ajouté à l'employé avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'ajout du rôle à l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};

// 8. Récupérer tous les retard associés à un employé
export const getEmployeretard = async (req, res) => {
    const { id } = req.params;
    try {
        const employe = await Employe.findByPk(id, {
            include: Role
        });
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });

        res.status(200).json({ data: employe.Roles });
    } catch (error) {
        console.error("Erreur lors de la récupération des rôles de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};