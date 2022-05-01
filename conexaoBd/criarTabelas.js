class Tabelas {
    init(conexao) { //inicia coneção com BD
        this.conexao = conexao
        console.log('Chamando tabelas...')
        this.agendarTarefa()
    }
    agendarTarefa() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada ou encontrada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas

