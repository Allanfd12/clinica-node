import express from 'express';
import MedicoController from '../controllers/medicoController.js';

const router = express.Router();

router.get('/', MedicoController.getAll);

module.exports = router;
