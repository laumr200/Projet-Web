import { Router } from 'express'; // Import du routeur Express
import {
    creerAlerte,
    obtenirAlertes,
    mettreAJourAlerte,
    supprimerAlerte,
    envoyerNotification
} from '../Calertecontroller.js';

const router = express.Router();

// Route pour créer une nouvelle alerte
router.post('/alertes', creerAlerte);

// Route pour obtenir toutes les alertes
router.get('/alertes', obtenirAlertes);

// Route pour mettre à jour une alerte
router.put('/alertes/:id', mettreAJourAlerte);

// Route pour supprimer une alerte
router.delete('/alertes/:id', supprimerAlerte);

// Route pour envoyer une notification
router.post('/alertes/:id/notification', envoyerNotification);

export default route;