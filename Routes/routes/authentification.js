const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authentification.js');

router.post('/login', login);

module.exports = router;
