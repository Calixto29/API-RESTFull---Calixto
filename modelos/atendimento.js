const conexao = require('../conexaoBd/conexao')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO teste SET ?'

        conexao.query(sql, atendimento, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
        
    }
}