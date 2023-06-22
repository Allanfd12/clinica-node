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
    static async create(paciente) {
        var result = await global.connection.query(`INSERT INTO pacientes SET ?`, paciente);
        return result[0];
    }
    static async update(id, paciente) {
        var result = await global.connection.query(`UPDATE pacientes SET ? WHERE id = ${id}`, paciente);
        return result[0];
    }
}

module.exports = Paciente;