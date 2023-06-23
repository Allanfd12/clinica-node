var db = require('../database/connection'); 

class Paciente {

    static async find(query) {
        var pacientes = await global.connection.query(`SELECT * FROM pacientes WHERE deleted_at is null and nome LIKE '%${query}%'`);
        return pacientes[0];
    }

    static async findById(id) {
        var pacientes = await global.connection.query(`SELECT * FROM pacientes WHERE id = ${id} and deleted_at is null`);
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

    static async delete(id) {
        var result = await global.connection.query(`UPDATE pacientes SET deleted_at = NOW() WHERE id = ${id}`);
        return result[0];
    }
    static async seachByName(nome) {
        var result = await global.connection.query(`SELECT id, nome as text FROM pacientes WHERE nome LIKE '%${nome}%' and deleted_at is null limit 10`);
        return result[0];
    }
}

module.exports = Paciente;