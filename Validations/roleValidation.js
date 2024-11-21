import { body } from 'express-validator';

const roleValidationRules = [
    body('nom_role')
        .exists().withMessage('Le nom du rôle est obligatoire')
        .isString().withMessage('Le nom du rôle doit être une chaîne de caractères')
        .isLength({ min: 3 }).withMessage('Le nom du rôle doit comporter au moins 3 caractères')  // Assurez-vous que le nom est suffisamment long
];

export default roleValidationRules
