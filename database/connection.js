//Função para conectar no banco de dados local

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

const mysql = require('mysql2/promise');
const connection = await mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'bancoclinica',
    password: 'ajshhefd8y8sdfv',
    database: 'clinica'
});

console.log("Conectou no MySQL!");
global.connection = connection;

return connection;
}
connect();


module.exports = {};
