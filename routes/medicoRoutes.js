var express = require('express');
var MedicoController = require('../controllers/medicoController.js');

const router = express.Router();

router.get('/', MedicoController.getAll);
router.get('/:id', MedicoController.getOne);
/*
router.post('/', MedicoController.create);
router.put('/:id', MedicoController.update);
router.delete('/:id', MedicoController.delete);*/

module.exports = router;
