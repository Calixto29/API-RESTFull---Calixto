class Tabelas {
    init(conexao) { //inicia coneção com BD
        this.conexao = conexao
        console.log('Chamando tabelas...')
        this.tabelaUser()
        this.tabelaTask()
    }
    tabelaUser() {
        const criarTabelaUser = 'CREATE TABLE IF NOT EXISTS User (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, cpf varchar(14) NOT NULL, birthDate date NOT NULL, email varchar(30) NOT NULL, password varchar(30) NOT NULL, address varchar(50) NOT NULL, number varchar(10) NOT NULL, complement varchar(20) NOT NULL, city varchar(30) NOT NULL, state varchar(30) NOT NULL, country varchar(30) NOT NULL, zipCode varchar(9) NOT NULL, PRIMARY KEY(id))' 

        this.conexao.query(criarTabelaUser, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada ou encontrada com sucesso!')
            }
        })
    }

    tabelaTask() {
        const criarTabelaTask = 'CREATE TABLE IF NOT EXISTS Task (user int(10) NOT NULL, description varchar(50) NOT NULL, date date NOT NULL, PRIMARY KEY(user))'

        this.conexao.query(criarTabelaTask, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada ou encontrada com sucesso!')
            }
        })

    }
}

module.exports = new Tabelas

