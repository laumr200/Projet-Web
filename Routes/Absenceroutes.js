import { Router } from 'express'; // Import du routeur Express
import { getAllAbsences, addAbsence, updateAbsence, delAbsence } from '../Controllers/absencecontroller.js'; // Import des contrôleurs
import absenceRules from '../Validations/absenceValidation.js'
const route = Router();

// Définition des routes pour les absences
route.get('/', getAllAbsences);          // Récupérer toutes les absences
route.post('/',absenceRules, addAbsence);             // Ajouter une nouvelle absence
route.put('/:id',absenceRules, updateAbsence);        // Modifier une absence
route.delete('/:id', delAbsence);        // Supprimer une absence



export default route;