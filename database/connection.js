const { pt_BR, fakerPT_BR } = require('@faker-js/faker');// Gerador de dados aleatórios

//Função para conectar no banco de dados local
async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3306', //coloque a porta do seu banco de dados
        user: 'root', //coloque o seu usuário
        password: '', //coloque a sua senha
        database: 'clinica' //crie essa database no seu banco de dados
    });

    console.log("Conectou no MySQL!");
    global.connection = connection;

    // Excluir tabelas existentes
    await connection.query(`
        DROP TABLE IF EXISTS consultas, medicos, pacientes;
    `);
    console.log("Tabelas 'consultas', 'medicos' e 'pacientes' excluídas!");
    
    //Gerar tabelas
    await connection.query(`
        CREATE TABLE IF NOT EXISTS pacientes (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome varchar(255) NOT NULL,
            cpf varchar(11) NOT NULL UNIQUE,
            telefone varchar(11) NOT NULL,
            rua varchar(255) NOT NULL,
            numero varchar(255) NOT NULL,
            bairro varchar(255) NOT NULL,
            cidade varchar(255) NOT NULL,
            estado varchar(255) NOT NULL,
            complemento varchar(255) NOT NULL,
            cep varchar(255) NOT NULL
        );
    `);
    console.log("Tabela 'pacientes' criada!");

    await connection.query(`
        CREATE TABLE IF NOT EXISTS medicos (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome varchar(255) NOT NULL,
            cpf varchar(11) NOT NULL UNIQUE,
            telefone varchar(11) NOT NULL,
            crm varchar(255) NOT NULL,
            especialidade varchar(255) NOT NULL
        );
    `);
    console.log("Tabela 'medicos' criada!");

    await connection.query(`
        CREATE TABLE IF NOT EXISTS consultas (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
            data date NOT NULL,
            hora time NOT NULL,
            id_paciente bigint(20) unsigned NOT NULL,
            id_medico bigint(20) unsigned NOT NULL,
            FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
            FOREIGN KEY (id_medico) REFERENCES medicos(id)
        );
    `);
    console.log("Tabela 'consultas' criada!");

    const totalPessoas = 10; // Total de pessoas a serem geradas
    const totalConsultas = 25;

    //Gerar pacientes aleatórios
    for (let i = 0; i < totalPessoas; i++) {
        const nome = fakerPT_BR.person.firstName();
        const cpf = fakerPT_BR.number.int({ min: 10000000000, max: 99999999999 });
        const telefone = fakerPT_BR.phone.number('###########');
        const rua = fakerPT_BR.location.streetAddress();
        const numero = fakerPT_BR.location.buildingNumber();
        const bairro = fakerPT_BR.location.street();
        const cidade = fakerPT_BR.location.city();
        const estado = fakerPT_BR.location.state();
        const complemento = fakerPT_BR.location.secondaryAddress();
        const cep = fakerPT_BR.location.zipCode();

        await connection.query(`INSERT INTO pacientes (nome, cpf, telefone, rua, numero, bairro, cidade, estado, complemento, cep) VALUES ('${nome}', '${cpf}', '${telefone}', '${rua}', '${numero}', '${bairro}', '${cidade}', '${estado}', '${complemento}', '${cep}')`);
    }
    console.log("Tabelas 'pacientes' preenchida!");

    //Gerar médicos aleatórios
    for (let i = 0; i < totalPessoas; i++) {
        const nome = fakerPT_BR.person.firstName();
        const cpf = fakerPT_BR.number.int({ min: 10000000000, max: 99999999999 });
        const telefone = fakerPT_BR.phone.number();
        const crm = fakerPT_BR.number.int({max: 999999999});
        const especialidade = fakerPT_BR.person.jobArea();

        await connection.query(`INSERT INTO medicos (nome, cpf, telefone, crm, especialidade) VALUES ('${nome}', '${cpf}', '${telefone}', '${crm}', '${especialidade}')`);
    }
    console.log("Tabelas 'medicos' preenchida!");

    //Gerar consultas aleatórias
    for (let i = 0; i < totalConsultas; i++) {
        const dataEhora = fakerPT_BR.date.between({ from: '2023-06-01T00:00:00.000Z', to: '2023-07-31T00:00:00.000Z' });
        const data = dataEhora.toISOString().split('T')[0];
        const hora = dataEhora.toISOString().split('T')[1].split('.')[0];
        const id_paciente = fakerPT_BR.number.int({min: 1, max: totalPessoas});
        const id_medico = fakerPT_BR.number.int({min: 1, max: totalPessoas});

        await connection.query(`INSERT INTO consultas (data, hora, id_paciente, id_medico) VALUES ('${data}', '${hora}', '${id_paciente}', '${id_medico}')`);
    }
    console.log("Tabelas 'consultas' preenchida!");

    return connection;
}

connect();

module.exports = {};
