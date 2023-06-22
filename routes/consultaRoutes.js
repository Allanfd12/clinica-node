var express = require('express');
var ConsultaController = require('../controllers/consultaController.js');

const router = express.Router();

router.get('/', ConsultaController.getAll);
router.get('/:id', ConsultaController.getOne);
/*
router.post('/', ConsultaController.create);
router.put('/:id', ConsultaController.update);
router.delete('/:id', ConsultaController.delete);*/


module.exports = router;
