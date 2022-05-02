const moment = require('moment');

const conexao = require('../conexaoBd/conexao');

function validarCpf(CPF) {
    var soma = 0;
var resto;
var CPF = CPF;

    if(CPF == '00000000000') return false;
    for(i=1; i<=9; i++) soma = soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(CPF.substring(9, 10))) return false;

    soma = 0;
    for(i = 1; i <= 10; i++) soma = soma + parseInt(CPF.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(CPF.substring(10, 11))) return false;
    return true;

}

class Cadastrar { 
    
    
    criaUser(cadastro, res) {
        //valida senha
            
        if(cadastro.password.length <6) {
            return res.status(400).json('Senha deve ser maior ou igual que 6 caracteres')
        }

        console.log(validarCpf(cadastro.cpf))
        if(!validarCpf(cadastro.cpf)) {
            return res.status(400).json('CPF inválido!')
        }

             
        
        const user = {
            ...cadastro
        };
        console.log(user);
        const sql = 'INSERT INTO user SET ? ';
        conexao.query(sql,user, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        });          
               
        
        
    };    

    listarUser(res) {
        const sql = 'SELECT * FROM user' //teste nome_tabela

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    };

    pesquisarIdUser(id, res) {
        const sql = `SELECT * FROM user WHERE id=${id}` 

        conexao.query(sql, (erro, resultados) => {
            const dadosUser = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(dadosUser)

            }
        })
    };

    alterarDados(id, valores, res) {
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE user SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    };

    deletarDados(id, res) {
        const sql = 'DELETE FROM user WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    };

    criaTask(cadastro, res) {
        const task = {
            ...cadastro
        };
        console.log(task);
        const sql = 'INSERT INTO task SET ? ';
        conexao.query(sql,task, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        }) 
    };

    listarTask(res) {
        const sql = 'SELECT * FROM task' //teste nome_tabela

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    };

    pesquisarIdTask(id, res) {
        const sql = `SELECT * FROM task WHERE id=${id}` 

        conexao.query(sql, (erro, resultados) => {
            const dadosTask = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(dadosTask)

            }
        })
    };

    alterarDadosTask(id, valores, res) {
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE task SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    };

    deletarDadosTask(id, res) {
        const sql = 'DELETE FROM task WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    };
    
};



module.exports = new Cadastrar
