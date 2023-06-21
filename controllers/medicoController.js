var Medico = require('../models/medico.js');

class MedicoController {

    static async getAll(req, res) {
        try {
            let medicos = await Medico.find();
            res.render('medicos', { medicos: medicos });
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = MedicoController;