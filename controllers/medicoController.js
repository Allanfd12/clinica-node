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

    static async create(req, res) {
        res.render('medico/criar');
    }
    static async save(req, res) {
        try {
            // get data from form post
            console.log(req.body);
            return;
            let medico = await Medico.create(req.body);
            res.redirect('/medicos');
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = MedicoController;

