const conexao = require('../conexaoBd/conexao')

class Cadastrar { //Cadastrar
    cria(cadastro) { //Cadastra o usuário
        const sql = 'INSERT INTO teste SET ?' // INSERT INTO NOME_TABELA SET ?
                            //OBJETO        //FUNÇAO
        conexao.query(sql, cadastro, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
        
    }
}

module.exports = new Cadastrar
