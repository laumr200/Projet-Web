import { body } from "express-validator";

const alerteRules = [
    body('message_alerte')
        .isString().withMessage("Le message d'alerte doit être une chaîne de caractères.")
        .notEmpty().withMessage("Le message d'alerte est obligatoire.")
        .isLength({ max: 500 }).withMessage("Le message d'alerte ne doit pas dépasser 500 caractères."),

    body('date_creation')
        .notEmpty().withMessage("La date de création est obligatoire.")
        .isISO8601().withMessage("La date de création doit être une date valide (format ISO 8601)."),

    body('date_expiration')
        .notEmpty().withMessage("La date d'expiration est obligatoire.")
        .isISO8601().withMessage("La date d'expiration doit être une date valide (format ISO 8601).")
        .custom((value, { req }) => {
            const dateCreation = new Date(req.body.date_creation);
            const dateExpiration = new Date(value);
            if (dateExpiration <= dateCreation) {
                throw new Error("La date d'expiration doit être postérieure à la date de création.");
            }
            return true;
        }),

    body('notification_envoyee')
        .notEmpty().withMessage("Le champ notification envoyée est obligatoire.")
        .isBoolean().withMessage("Le champ notification envoyée doit être un booléen."),
];

export default alerteRules;
