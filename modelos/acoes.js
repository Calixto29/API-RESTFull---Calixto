const moment = require('moment');
const conexao = require('../conexaoBd/conexao');

class Cadastrar { //Cadastrar
    cria(cadastro, res) { //Cadastra o usuário
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') 
        const data = moment(cadastro.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //converte o formato de data 
        const cadastroDataCriacao = {...cadastro, dataCriacao, data}
        const sql = 'INSERT INTO teste SET ?' // INSERT INTO NOME_TABELA SET ?
                            //OBJETO        //FUNÇAO
        conexao.query(sql, cadastroDataCriacao, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
        
    }
}

module.exports = new Cadastrar
