import Paciente from '../models/paciente.js';

class PacienteController {

    static async getAll(req, res) {
        try {
            let pacientes = await Paciente.find();
            res.render('pacientes', { pacientes: pacientes });
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = PacienteController;