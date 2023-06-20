import express from 'express';
import MedicoRoutes from './medicoRoutes.js';
import PacienteRoutes from './pacienteRoutes.js';
import ConsultaRoutes from './consultaRoutes.js';
import IndexRoutes from './indexRoutes.js';


const router = (app) => {
    app.use('/', IndexRoutes);
    app.use('/paciente', PacienteRouter);
    app.use('/medicos', MedicoRoutes);
    app.use('/consulta', ConsultaRoutes);
}


module.exports = router;
