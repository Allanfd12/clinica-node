import express from 'express';
import PacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.get('/', PacienteController.getAll);

module.exports = router;
