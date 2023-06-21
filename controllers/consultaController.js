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

            res.render('consulta', { consultas: consultas });
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = ConsultaController;