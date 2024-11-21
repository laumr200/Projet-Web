import { body } from 'express-validator';

// Validation des données pour le rapport
const rapportValidationRules = [
    body('title')
        .exists().withMessage('Le titre est obligatoire')
        .isString().withMessage('Le titre doit être une chaîne de caractères')
        .isLength({ min: 3 }).withMessage('Le titre doit avoir au moins 3 caractères'),

    body('content')
        .exists().withMessage('Le contenu est obligatoire')
        .isString().withMessage('Le contenu doit être une chaîne de caractères')
        .isLength({ min: 10 }).withMessage('Le contenu doit comporter au moins 10 caractères'),
];

export default rapportValidationRules

