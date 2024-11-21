
import bcrypt from 'bcryptjs'
import { Employe , Absence, Role } from '../Models/relations.js' 
import {validationResult} from "express-validator";



 ////-1 Lecture de la liste des utilisateurs
export const getAllEmployes = async (req, res) => {
    try {
        const employes = await Employe.findAll();
        res.status(200).json({ data: employes });
    } catch (error) {
        console.error('Erreur lors de la récupération des employés:', error);
        res.status(400).json({ message: error.message });
    }
};

// 2. Ajout d'un employé
export const addEmployes = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);  // Vérifier les erreurs
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Si des erreurs existent, retourner un message d'erreur
    }

    const employes = req.body; // Array of employe objects
    const picture = req.file;
    const imagePath = picture?.path?.split('\\').join('/');
    const fullPath = picture ? req.protocol + '://' + req.get('host') + '/' + imagePath : null;

    try {
        const results = await Promise.all(
            employes.map(async (employe) => {
                const { mot_de_passe, ...restOfEmploye } = employe;
                const motDePasseCrypte = bcrypt.hashSync(mot_de_passe);
                return await Employe.create({ ...restOfEmploye, mot_de_passe: motDePasseCrypte, photo: fullPath });
            })
        );
        res.status(201).json({ message: "Employés ajoutés avec succès", data: results });
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout des employés", error: error.message });
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

    // Vérification des erreurs de validation
    const errors = validationResult(req);  // Vérifier les erreurs
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Si des erreurs existent, retourner un message d'erreur
    }
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
export const getEmployeAbsences = async (req, res) => {
    const { id } = req.params; // Récupérer l'ID de l'employé depuis les paramètres de la requête

    try {
        // Trouver l'employé et inclure ses absences
        const employe = await Employe.findByPk(id, {
            include: Absence
        });
        if (!employe) return res.status(404).json({ message: "Employé non trouvé" });

        res.status(200).json({ data: employe.Absences });
    } catch (error) {
        console.error("Erreur lors de la récupération des absences de l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};


//  7. Associer un rôle à un employé
export const addRoleToEmploye = async (req, res) => {
    const { employeId, roleId } = req.params;
    try {
        const employe = await Employe.findByPk(employeId);
        const role = await Role.findByPk(roleId);

        if (!employe || !role) {
            return res.status(404).json({ message: "Employé ou rôle non trouvé" });
        }

        await employe.addRole(role); // Ajoute le rôle à l'employé
        res.status(200).json({ message: "Rôle ajouté à l'employé avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'ajout du rôle à l'employé:", error);
        res.status(400).json({ message: error.message });
    }
};

// 8. Récupérer tous les rôles associés à un employé
export const getEmployeRoles = async (req, res) => {
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