var db = require('../database/connection'); 

class Paciente {

    static async find() {
        var pacientes = await global.connection.query('SELECT * FROM pacientes');
        return pacientes[0];
    }
    static async findById(id) {
        var pacientes = await global.connection.query(`SELECT * FROM pacientes WHERE id = ${id}`);
        return pacientes[0][0];
    }
}

module.exports = Paciente;