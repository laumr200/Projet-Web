import { body, param } from 'express-validator';

// Validation des données pour la création et la mise à jour des retards
const retardValidationRules = [
    body('date_retard')
        .exists().withMessage('La date de retard est obligatoire')
        .isISO8601().withMessage('La date doit être valide'), // Vérifie que la date est bien au format ISO

    body('motif')
        .exists().withMessage('Le motif du retard est obligatoire')
        .isString().withMessage('Le motif doit être une chaîne de caractères')
        .isLength({ min: 5 }).withMessage('Le motif doit avoir au moins 5 caractères'),

    body('heure_retard')
        .exists().withMessage('L\'heure de retard est obligatoire')
        .isString().withMessage('L\'heure de retard doit être une chaîne de caractères')
        .matches(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/).withMessage('L\'heure de retard doit être au format HH:mm'), // Vérifie le format de l'heure

    param('id')
        .optional() // Le paramètre `id` n'est nécessaire que pour les requêtes GET, PUT et DELETE
        .isInt().withMessage('L\'ID doit être un entier valide'),
];

export default retardValidationRules