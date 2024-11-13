import   Alerte from '../Models/Absence.js';// Import du modèle Absence
import Employe from '../Models/Employe.js'; //Import du modèle Employé

// 1. Créer une nouvelle alerte
export const creerAlerte = async (req, res) => {
    try {
        const { message_alerte, date_creation, date_expiration, employe_id } = req.body;
        const nouvelleAlerte = await Alerte.create({
            message_alerte,
            date_creation,
            date_expiration,
            notification_envoyee: false,
            employe_id
        });
        res.status(201).json(nouvelleAlerte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. Obtenir toutes les alertes
export const obtenirAlertes = async (req, res) => {
    try {
        const alertes = await Alerte.findAll({
            include: [{ model: Employe, as: 'employe' }]
        });
        res.status(200).json(alertes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Mettre à jour une alerte
export const mettreAJourAlerte = async (req, res) => {
    try {
        const { id } = req.params;
        const { message_alerte, date_expiration, notification_envoyee } = req.body;
        const alerte = await Alerte.findByPk(id);
        if (alerte) {
            alerte.message_alerte = message_alerte;
            alerte.date_expiration = date_expiration;
            alerte.notification_envoyee = notification_envoyee;
            await alerte.save();
            res.status(200).json(alerte);
        } else {
            res.status(404).json({ error: 'Alerte non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4. Supprimer une alerte
export const supprimerAlerte = async (req, res) => {
    try {
        const { id } = req.params;
        const alerte = await Alerte.findByPk(id);
        if (alerte) {
            await alerte.destroy();
            res.status(200).json({ message: 'Alerte supprimée' });
        } else {
            res.status(404).json({ error: 'Alerte non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 5. Envoyer une notification
export const envoyerNotification = async (req, res) => {
    try {
        const { id } = req.params;
        const alerte = await Alerte.findByPk(id);
        if (alerte) {
            // Logique pour envoyer la notification
            console.log(`Notification envoyée: ${alerte.message_alerte}`);
            alerte.notification_envoyee = true;
            await alerte.save();
            res.status(200).json({ message: 'Notification envoyée', alerte });
        } else {
            res.status(404).json({ error: 'Alerte non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};