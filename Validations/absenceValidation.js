import { body, param } from 'express-validator';

// Regex pour le type d'absence
const typeAbsenceRegex = /^(maladie|congé|vacances |autre)$/i; // Accepte "maladie", "congé" ou "autre"

// Liste des règles de validation pour l'absence
const absenceRules = [
    body('date_absence')
        .exists().withMessage('La date d\'absence est obligatoire')
        .isISO8601().withMessage('La date doit être valide'),
    body('type_absence')
        .exists().withMessage('Le type d\'absence est obligatoire')
        .matches(typeAbsenceRegex).withMessage('Le type d\'absence doit être "maladie", "congé" "vacances"ou "autre"'),
    body('justification')
        .optional() // La justification peut être optionnelle, mais si elle existe, elle doit être non vide
        .notEmpty().withMessage('La justification est obligatoire si le type d\'absence est "autre"')
        .custom((value, { req }) => {
            if (req.body.type_absence === 'autre' && !value) {
                throw new Error('La justification est requise pour une absence de type "autre"');
            }
            return true;
        }),
        param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")

];

export default absenceRules
