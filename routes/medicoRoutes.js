var express = require('express');
var MedicoController = require('../controllers/medicoController.js');

const router = express.Router();

router.get('/', MedicoController.getAll);
router.get('/criar', MedicoController.create);
router.get('/:id', MedicoController.getOne);

router.post('/', MedicoController.save);
/*

router.put('/:id', MedicoController.update);
router.delete('/:id', MedicoController.delete);*/

module.exports = router;
