const Rapport = require('../models/rapport.js');

exports.getRapports = async (req, res) => {
    try {
        const rapports = await Rapport.findAll();
        res.status(200).json(rapports);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des rapports' });
    }
};
