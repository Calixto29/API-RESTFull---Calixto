class Tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log('Chamando tabelas...')
        this.agendarTarefa()
    }
    agendarTarefa() {
        const sql = 'CREATE TABLE IF NOT EXISTS teste (id int NOT NULL AUTO_INCREMENT, teste2 varchar(50), PRIMARY KEY(id))'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas

