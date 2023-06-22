var Medico = require('../models/medico.js');

class MedicoController {

    static async getAll(req, res) {
        try {
            let medicos = await Medico.find();
            res.render('medico', { medicos: medicos });
        } catch (error) {
            console.log(error);
        }
    }
    static async getOne(req, res) {
        try {
            let medico = await Medico.findById(req.params.id);
            res.render('medico/visualizar', { medico: medico });
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = MedicoController;