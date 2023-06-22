var db = require('../database/connection');

class Consulta {

    static async find() {
        var consultas = await global.connection.query(`SELECT c.*, p.nome AS nome_paciente, m.nome AS nome_medico FROM consultas c INNER JOIN pacientes p ON c.id_paciente = p.id INNER JOIN medicos m ON c.id_medico = m.id`);
        return consultas[0];
    }
    static async findById(id) {
        var consultas = await global.connection.query(`SELECT c.*, p.nome AS nome_paciente, m.nome AS nome_medico FROM consultas c INNER JOIN pacientes p ON c.id_paciente = p.id INNER JOIN medicos m ON c.id_medico = m.id WHERE c.id = ${id}`);
        return consultas[0][0];
    }
    static async create(consulta) {
        var result = await global.connection.query(`INSERT INTO consultas SET ?`, consulta);
        return result[0];
    }
    static async update(id, consulta) {
        var result = await global.connection.query(`UPDATE consultas SET ? WHERE id = ${id}`, consulta);
        return result[0];
    }
}

module.exports = Consulta;