const moment = require('moment');
const conexao = require('../conexaoBd/conexao');

class Cadastrar { //Cadastrar User
    criaUser(cadastro, res) { //Cadastra o usuário
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') 
        const data = moment(cadastro.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //converte o formato de data 
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const nameValido = cadastro.teste2.length >=5 //alrterar p/ nome user

        const validarDados = [
            {
                nome: 'data', 
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
                
            },
            {
                nome: 'user',
                valido: nameValido,
                mensagem: 'Nome deve ter pelo menos cinco caracteres'

            }
        ]

        const erros = validarDados.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)            
        } else {
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

    listarUser(res) {
        const sql = 'SELECT * FROM teste' //teste nome_tabela

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    pesquisarIdUser(id, res) {
        const sql = `SELECT * FROM teste WHERE id=${id}` 

        conexao.query(sql, (erro, resultados) => {
            const dadosUser = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(dadosUser)

            }
        })
    }

    alterarDados(id, valores, res) {
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE teste SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    deletarDados(id, res) {
        const sql = 'DELETE FROM teste WHERE id= ?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Cadastrar
