import User from '../models/authentification.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};