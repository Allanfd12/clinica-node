var express = require('express');
var MedicoRoutes = require('./medicoRoutes.js');
var PacienteRoutes = require('./pacienteRoutes.js');
var ConsultaRoutes = require('./consultaRoutes.js');
var IndexRoutes = require('./indexRoutes.js');


const router = (app) => {
    app.use('/', IndexRoutes);
    app.use('/paciente', PacienteRoutes);
    app.use('/medico', MedicoRoutes);
    app.use('/consulta', ConsultaRoutes);
}


module.exports = router;
