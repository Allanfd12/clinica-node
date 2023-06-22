var db = require('../database/connection'); 
class Medico {

    static async find() {
        var medicos = await global.connection.query('SELECT * FROM medicos');
        return medicos[0];
    
    }

    static async findById(id) {
        var medicos = await global.connection.query(`SELECT * FROM medicos WHERE id = ${id}`);
        return medicos[0][0];
    }
    
}

module.exports = Medico;