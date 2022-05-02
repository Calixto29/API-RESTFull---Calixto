const moment = require('moment');

const conexao = require('../conexaoBd/conexao');

class Cadastrar { 
    
    criaUser(cadastro, res) {
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
        }) 

        
               
        //Cadastra o usuário
        //const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') 
        //const data = moment(cadastro.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //converte o formato de data 
        //const birthDateValido= moment(data).isSameOrAfter(dataCriacao)
        //const cpfValido = 
        //const emailValido = 
        const passwordValido = cadastro.password.length >=6 //user = tabela
        
        const validarDados = [
            {
                //nome: 'idade', 
                //valido: birthDateValido,
                //mensagem: 'Usuario deve ter mais que 18 anos'
                
            },
            {
                nome: 'password',
                valido: passwordValido,
                mensagem: 'Password deve ter pelo menos 6 caracteres'

            }
        ]

        // const erros = validarDados.filter(campo => !campo.valido)
        // const existemErros = erros.length

        // //if(existemErros) {
        //     res.status(400).json(erros)            
        // } else {
        //     const cadastroDataCriacao = {...cadastro, dataCriacao, data}
        // const sql = 'INSERT INTO user SET ?' // INSERT INTO NOME_TABELA SET ?
        //                     //OBJETO        //FUNÇAO
        // conexao.query(sql, cadastroDataCriacao, (erro, resultados) => {
        //     if (erro) {
        //         res.status(400).json(erro)
        //     } else {
        //         res.status(201).json(resultados)
        //     }
        // })
        //}

        
        
    }    

    listarUser(res) {
        const sql = 'SELECT * FROM user' //teste nome_tabela

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

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
    }

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
    }

    deletarDados(id, res) {
        const sql = 'DELETE FROM user WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

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
    }

    listarTask(res) {
        const sql = 'SELECT * FROM task' //teste nome_tabela

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

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
    }

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
    }

    deletarDadosTask(id, res) {
        const sql = 'DELETE FROM task WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
    
}



module.exports = new Cadastrar
