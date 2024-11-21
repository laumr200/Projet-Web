import { body } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z]{4,}$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const employeValidationRules = [
    body('nom').matches(nameRegex).withMessage("Le nom n'est pas conforme."),
    body('prenom').matches(nameRegex).withMessage("Le prénom n'est pas conforme."),
    body('email')
        .exists().withMessage("Email obligatoire.")
        .isEmail().withMessage("Ceci n'est pas un email valide."),
    body('mot_de_passe').matches(mdpRegex).withMessage("Le mot de passe n'est pas conforme."),
    body('date_d_embauche').isISO8601().withMessage("La date est incorrecte."),
];

export default employeValidationRules