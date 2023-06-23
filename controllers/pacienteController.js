var Paciente = require('../models/paciente.js');

class PacienteController {

    static async getAll(req, res) {
        try {
            let query = req.query?.search?? '';
            let pacientes = await Paciente.find(query);
            res.render('layout/pacientes', { pacientes: pacientes , query: query});
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(req, res) {
        try {
            let paciente = await Paciente.findById(req.params.id);
            res.render('paciente/visualizar', { paciente: paciente });
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res) {
        res.render('paciente/criar');
    }
    
    static async save(req, res) {
        try {
            let paciente = req.body;

            paciente.telefone = paciente.telefone.replace(/\D/g, '');
            paciente.cpf = paciente.cpf.replace(/\D/g, '');

            await Paciente.create(paciente);
            res.redirect('/paciente');
        } catch (error) {
            console.log(error);
        }
    }
    
    static async editar(req, res) {
        try {
            let paciente = await Paciente.findById(req.params.id);
            res.render('paciente/editar', { paciente: paciente });
        } catch (error) {
            console.log(error);
        }
    }
    static async update(req, res) {
        try {
            let paciente = req.body;
            // trata campos do formulário
            paciente.telefone = paciente.telefone.replace(/\D/g, '');
            paciente.cpf = paciente.cpf.replace(/\D/g, '');

            await Paciente.update(req.params.id, paciente);
            res.redirect('/paciente');
        } catch (error) {
            console.log(error);
        }
    }
    static async delete(req, res) {
        try {
            await Paciente.delete(req.params.id);
            res.redirect('/paciente');
        } catch (error) {
            console.log(error);
        }
    }

    static async search(req, res) {
        const searchTerm = req.query.searchItem || ''; // Obtém o termo de pesquisa da query string

        // Execute a consulta no banco de dados
        const query = `SELECT * FROM pacientes WHERE nome LIKE '%${searchTerm}%'`;
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Erro ao executar a consulta no banco de dados:', err);
                return res.status(500).json({ error: 'Erro ao buscar pacientes.' });
            }

            // Formate os resultados no formato esperado pelo select2
            const formattedResults = results.map((paciente) => ({
                id: paciente.id,
                text: paciente.nome
            }));

            // Envie a resposta com os resultados formatados
            res.json({ data: formattedResults });
        });
    }
}

module.exports = PacienteController;