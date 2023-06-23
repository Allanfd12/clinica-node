var db = require('../database/connection'); 
class Medico {

    static async find(query) {
        var medicos = await global.connection.query(`SELECT * FROM medicos WHERE deleted_at is null and nome LIKE '%${query}%'`);
        return medicos[0];
    
    }
    static async findById(id) {
        var medicos = await global.connection.query(`SELECT * FROM medicos WHERE id = ${id} and deleted_at is null`);
        return medicos[0][0];
    }
    static async create(medico) {
        var result = await global.connection.query(`INSERT INTO medicos SET ?`, medico);
        return result[0];
    }
    static async update(id, medico) {
        var result = await global.connection.query(`UPDATE medicos SET ? WHERE id = ${id}`, medico);
        return result[0];
    }
    static async delete(id) {
        var result = await global.connection.query(`UPDATE medicos SET deleted_at = NOW() WHERE id = ${id}`);
        return result[0];
    }
    static async seachByName(nome) {
        var result = await global.connection.query(`SELECT id, nome FROM medicos WHERE nome LIKE '%${nome}%' and deleted_at is null limit 10`);
        return result[0];
    }
}

module.exports = Medico;