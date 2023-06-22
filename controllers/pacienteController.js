var Paciente = require('../models/paciente.js');

class PacienteController {

    static async getAll(req, res) {
        try {
            let pacientes = await Paciente.find();
            res.render('pacientes', { pacientes: pacientes });
        } catch (error) {
            console.log(error);
        }
    }

    static async criar(req, res) {
        
    }
    
}

module.exports = PacienteController;