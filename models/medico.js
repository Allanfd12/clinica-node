var db = require('../database/connection'); 
class Medico {

    static async find() {
        var medicos = await global.connection.query('SELECT * FROM medicos');
        return medicos[0];
    
    }
    
}

module.exports = Medico;