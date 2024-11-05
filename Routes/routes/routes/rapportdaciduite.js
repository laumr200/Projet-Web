const express = require('express');
const router = express.Router();
const { getRapports } = require('../controllers/rapportdaciduite.js');

router.get('/rapports', getRapports);

module.exports = router;
