var express = require('express');
var bodyParser = require('body-parser');
var MedicoController = require('../controllers/medicoController.js');

const router = express.Router();

router.get('/', MedicoController.getAll);
router.get('/criar', MedicoController.create);
router.get('/search', MedicoController.search);
router.post('/',bodyParser.urlencoded({extended: true}), MedicoController.save);
router.get('/:id', MedicoController.getOne);
router.get('/:id/editar', MedicoController.editar);
router.post('/:id/update',bodyParser.urlencoded({extended: true}), MedicoController.update);
router.get('/:id/excluir', MedicoController.delete);


module.exports = router;
