var express = require('express');
var PacienteController = require('../controllers/pacienteController.js');

const router = express.Router();

router.get('/', PacienteController.getAll);

module.exports = router;
