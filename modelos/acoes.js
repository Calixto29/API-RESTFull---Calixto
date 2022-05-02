const moment = require('moment');

const conexao = require('../conexaoBd/conexao');

class Cadastrar { 
    
    
    criaUser(cadastro, res) {
        //valida senha
        if(cadastro.password.length <6) {
            res.status(400).json('Senha deve ser maior ou igual que 6 caracteres')
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
