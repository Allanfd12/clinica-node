var express = require('express');
var ConsultaController = require('../controllers/consultaController.js');

const router = express.Router();

router.get('/', ConsultaController.getAll);

module.exports = router;
