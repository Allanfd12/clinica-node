var express = require('express');
var bodyParser = require('body-parser');
var ConsultaController = require('../controllers/consultaController.js');

const router = express.Router();

router.get('/', ConsultaController.getAll);
router.get('/criar', ConsultaController.create);
router.post('/',bodyParser.urlencoded(), ConsultaController.save);
router.get('/:id', ConsultaController.getOne);
/*
router.post('/', ConsultaController.create);
router.put('/:id', ConsultaController.update);
router.delete('/:id', ConsultaController.delete);*/


module.exports = router;
