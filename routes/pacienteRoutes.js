var express = require('express');
var PacienteController = require('../controllers/pacienteController.js');

const router = express.Router();

router.get('/', PacienteController.getAll);
router.get('/:id', PacienteController.getOne);
/*
router.post('/', PacienteController.create);
router.put('/:id', PacienteController.update);
router.delete('/:id', PacienteController.delete);*/
module.exports = router;
