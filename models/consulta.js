var db = require('../database/connection');

class Consulta {

    static async find(query) {
        var consultas = await global.connection.query(`SELECT c.*, p.nome AS nome_paciente, p.id as paciente_id, m.nome AS nome_medico, m.id as medico_id, case when c.data < curdate() then 'realizada' when c.data = curdate() then 'hoje' else 'agendada' end as classe FROM consultas c INNER JOIN pacientes p ON c.id_paciente = p.id INNER JOIN medicos m ON c.id_medico = m.id WHERE p.nome LIKE '%${query}%' or m.nome LIKE '%${query}%' ORDER BY c.data DESC, c.hora DESC`);
        return consultas[0];
    }
    static async findById(id) {
        var consultas = await global.connection.query(`SELECT c.*, p.nome AS nome_paciente, p.id as paciente_id, m.nome AS nome_medico, m.id as medico_id FROM consultas c INNER JOIN pacientes p ON c.id_paciente = p.id INNER JOIN medicos m ON c.id_medico = m.id WHERE c.id = ${id}`);
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
    static async delete(id) {
        var result = await global.connection.query(`DELETE FROM consultas WHERE id = ${id}`);
        return result[0];
    }
}

module.exports = Consulta;