const moment = require('moment');
const conexao = require('../conexaoBd/conexao');

//CADASTRAR NOVO USUÁRIO
class Cadastrar { 
    cria(cadastro, res) { 
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') 
        const data = moment(cadastro.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //converte o formato de data
        const dataValida = moment(data).isSameOrAfter(dataCriacao) //valida a data que não pode ser menor que a data atual.
        const nomeValido = cadastro.teste2.length >=5 //condições
        

        //validações dos dados:
        const validacoes = [
            {
                nome: 'data', //nome da tabela
                valido: dataValida, //nome da função
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente', //usuário nome da tabela
                valido: nomeValido, //nome da função
                mensagem: 'Cliente deve ter no minimo cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        //condições
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
}

module.exports = new Cadastrar
