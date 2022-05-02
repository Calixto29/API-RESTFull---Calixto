class Tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log('Chamando tabelas... \n')
        this.tabelaUser()
        this.tabelaTask()
        this.criarPK()
    }

    //Criar Tabela User
    tabelaUser() {
        const criarTabelaUser = 'CREATE TABLE IF NOT EXISTS user (id int not null auto_increment, name varchar(50) not null, cpf varchar(14) NOT NULL, birthDate date NOT NULL, email varchar(30) NOT NULL,password varchar(30) NOT NULL, address varchar(50) NOT NULL, number varchar(10) NOT NULL,complement varchar(30) NOT NULL, city varchar(30) NOT NULL, state varchar(30) NOT NULL, country varchar(30) NOT NULL, zipCode varchar(9) NOT NULL, PRIMARY KEY(id))' 

        this.conexao.query(criarTabelaUser, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela USER criada ou encontrada com sucesso! \n')
            }
        })
    }

    //Criar Tabela Task
    tabelaTask() {
        const criarTabelaTask = 'CREATE TABLE IF NOT EXISTS task (id int not null auto_increment, description varchar(40), date date not null, user int, PRIMARY KEY(id));'

        this.conexao.query(criarTabelaTask, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela TASK criada ou encontrada com sucesso!\n')
            }
        })

    }

    //Criar Chave estrangeira
    criarPK() {
        const criarPK = 'ALTER TABLE task ADD FOREIGN KEY(user) REFERENCES user(id)'

        this.conexao.query(criarPK, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('')
            }
        })

    }
    
}

module.exports = new Tabelas

