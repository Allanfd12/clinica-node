//Função para conectar no banco de dados local

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'clinica'
    });

    console.log("Conectou no MySQL!");
    global.connection = connection;

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
            data varchar(255) NOT NULL,
            hora varchar(255) NOT NULL,
            id_paciente bigint(20) unsigned NOT NULL,
            id_medico bigint(20) unsigned NOT NULL,
            FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
            FOREIGN KEY (id_medico) REFERENCES medicos(id)
        );
    `);
    console.log("Tabela 'consultas' criada!");

    return connection;
}

connect();

module.exports = {};
