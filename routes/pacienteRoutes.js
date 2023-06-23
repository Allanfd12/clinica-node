var express = require('express');
var bodyParser = require('body-parser');
var PacienteController = require('../controllers/pacienteController.js');

const router = express.Router();

router.get('/', PacienteController.getAll);
router.get('/criar', PacienteController.create);
router.get('/search', PacienteController.search);
router.post('/',bodyParser.urlencoded({extended: true}), PacienteController.save);
router.get('/:id', PacienteController.getOne);
router.get('/:id/editar', PacienteController.editar);
router.post('/:id/update',bodyParser.urlencoded({extended: true}), PacienteController.update);
router.get('/:id/excluir', PacienteController.delete);

module.exports = router;
