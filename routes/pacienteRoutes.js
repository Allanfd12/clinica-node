var express = require('express');
var bodyParser = require('body-parser');
var PacienteController = require('../controllers/pacienteController.js');

const router = express.Router();

router.get('/', PacienteController.getAll);
router.get('/criar', PacienteController.create);
router.post('/',bodyParser.urlencoded(), PacienteController.save);
router.get('/:id', PacienteController.getOne);
router.get('/:id/editar', PacienteController.editar);
router.post('/:id/update',bodyParser.urlencoded(), PacienteController.update);
/*
router.post('/', PacienteController.create);
router.put('/:id', PacienteController.update);
router.delete('/:id', PacienteController.delete);*/
module.exports = router;
