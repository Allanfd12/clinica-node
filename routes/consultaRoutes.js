import express from 'express';
import ConsultaController from '../controllers/consultaController.js';

const router = express.Router();

router.get('/', ConsultaController.getAll);

module.exports = router;
