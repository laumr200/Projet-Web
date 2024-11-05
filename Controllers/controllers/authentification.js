const jwt = require('jsonwebtoken');
const User = require('../models/authentification.js');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            const token = jwt.sign({ id: user.id, role: user.role }, 'votreSecretJWT', { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Authentification échouée' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};
