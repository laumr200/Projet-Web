import { Router } from 'express';
import { getAllEmployes, addEmployes, updateEmploye, delEmploye ,getEmployeAbsences, addRoleToEmploye,getEmployeRoles } from '../Controllers/employecontroller.js';
import employeValidationRules from '../Validations/employeValidation.js'

//Importer la fonction pour charger les images/fichiers
import upload from "../helpers/fileLoader.js";
import { verifierToken } from "../authentification/verifierToken.js";


const route = Router()
route.post('/', upload.single('photo'), addEmployes)
route.all("*",verifierToken)
//route.all("*",autoriser(["admin"])) 
route.get('/', getAllEmployes);
route.post('/', employeValidationRules, addEmployes);
route.put('/:id', employeValidationRules ,updateEmploye);
route.delete('/:id', delEmploye);
route.get('/:id/absences', getEmployeAbsences);
route.post('/:id/roles/:roleId', employeValidationRules, addRoleToEmploye);
route.get('/:id/roles', getEmployeRoles);

export default route;