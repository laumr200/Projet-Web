import Rapport from '../Models/rapport.js';

export const getRapports = async (req, res) => {
    try {
        const rapports = await Rapport.findAll();
        res.status(200).json(rapports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).send('Internal Server Error');
    }
};