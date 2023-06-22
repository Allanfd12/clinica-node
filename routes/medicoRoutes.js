var express = require('express');
var bodyParser = require('body-parser');
var MedicoController = require('../controllers/medicoController.js');

const router = express.Router();

router.get('/', MedicoController.getAll);
router.get('/criar', MedicoController.create);
router.post('/',bodyParser.urlencoded(), MedicoController.save);
router.get('/:id', MedicoController.getOne);

/*

router.put('/:id', MedicoController.update);
router.delete('/:id', MedicoController.delete);*/

module.exports = router;
