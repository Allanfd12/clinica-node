var Paciente = require('../models/paciente.js');

class PacienteController {

    static async getAll(req, res) {
        try {
            let pacientes = await Paciente.find();
            res.render('layout/pacientes', { pacientes: pacientes });
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(req, res) {
        try {
            let paciente = await Paciente.findById(req.params.id);
            res.render('paciente/visualizar', { paciente: paciente });
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        res.render('paciente/criar');
    }
    
    static async save(req, res) {
        try {
            let paciente = await Paciente.create(req.body);
            res.redirect('/paciente');
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = PacienteController;