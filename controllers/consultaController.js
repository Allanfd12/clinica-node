var Consulta = require('../models/consulta.js');
const moment = require('moment');

class ConsultaController {

    static async getAll(req, res) {
        try {
            let consultas = await Consulta.find();

            consultas.forEach(consulta => {
                consulta.data = moment(consulta.data).format('DD/MM/YYYY');
                consulta.hora = moment(consulta.hora, 'HH:mm:ss').format('HH:mm');
            });

            res.render('layout/consulta', { consultas: consultas });
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(req, res) {
        try {
            let consulta = await Consulta.findById(req.params.id);
            res.render('consulta/visualizar', { consulta: consulta });
        } catch (error) {
            console.log(error);
        }
    }
    static async create(req, res) {
        res.render('consulta/criar');
    }
    static async save(req, res) {
        try {
            let consulta = await Consulta.create(req.body);
            res.redirect('/consulta');
        } catch (error) {
            console.log(error);
        }
    }

    static async editar(req, res) {
        try {
            let consulta = await Consulta.findById(req.params.id);
            res.render('consulta/editar-teste-back', { consulta: consulta });
        } catch (error) {
            console.log(error);
        }
    }
    static async update(req, res) {
        try {
            let consulta = req.body;
            // trata campos do formulário


            await Consulta.update(req.params.id, consulta);
            res.redirect('/consulta');
        } catch (error) {
            console.log(error);
        }
    }
    static async delete(req, res) {
        try {
            await Consulta.delete(req.params.id);
            res.redirect('/consulta');
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = ConsultaController;