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
    static async create(consulta) {
        var result = await global.connection.query(`INSERT INTO pacientes SET ?`, consulta);
        return result[0];
    }
}

module.exports = Paciente;