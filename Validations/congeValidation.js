import { body } from 'express-validator';

// Regex pour le type de congé
const typeCongeRegex = /^(maladie|vacances|congé sans solde|autre)$/i;  // Types acceptés

const congeValidationRules = [
    body('date_conge')
        .exists().withMessage('La date de congé est obligatoire')
        .isISO8601().withMessage('La date doit être valide'),
    
    body('type_conge')
        .exists().withMessage('Le type de congé est obligatoire')
        .matches(typeCongeRegex).withMessage('Le type de congé doit être "maladie", "vacances", "congé sans solde" ou "autre"'),

    body('justification')
        .optional() // La justification est optionnelle
        .notEmpty().withMessage('La justification ne peut pas être vide si fournie')
        .custom((value, { req }) => {
            // Vérifie si le type de congé est "autre" et que la justification est fournie
            if (req.body.type_conge === 'autre' && !value) {
                throw new Error('La justification est requise pour un congé de type "autre"');
            }
            return true;
        }),
];

export default congeValidationRules
