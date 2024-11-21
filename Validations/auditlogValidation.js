import { body } from "express-validator";

const auditLogValidationRules = [
  // Validation pour le champ "action"
  body("action")
    .exists().withMessage("Le champ 'action' est obligatoire")
    .isString().withMessage("Le champ 'action' doit être une chaîne de caractères")
    .isLength({ min: 3 }).withMessage("Le champ 'action' doit contenir au moins 3 caractères")
    .isLength({ max: 255 }).withMessage("Le champ 'action' ne doit pas dépasser 255 caractères"),

  // Validation pour le champ "details"
  body("details")
    .optional() // Ce champ est optionnel
    .isString().withMessage("Le champ 'details' doit être une chaîne de caractères")
    .isLength({ max: 1000 }).withMessage("Le champ 'details' ne doit pas dépasser 1000 caractères"),
];

export default auditLogValidationRules
