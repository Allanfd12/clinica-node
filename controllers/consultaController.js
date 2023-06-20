import Consulta from '../models/consulta.js';

class ConsultaController {

    static async getAll(req, res) {
        try {
            let consultas = await Consulta.find();
            res.render('consultas', { consultas: consultas });
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = ConsultaController;