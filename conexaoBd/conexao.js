const mysql = require('mysql2');
const conexao = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'Calixto',
        password: '123456',
        database: "agenda_de_tarefas"
})

module.exports = conexao



