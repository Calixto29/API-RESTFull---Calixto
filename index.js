const customizacaoExpress = require('./configurações/customizacaoExpress');

const conexao = require('./conexaoBd/conexao')

const Tabelas = require('./conexaoBd/criarTabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }else {
        console.log('conectado ao banco com sucesso')

        Tabelas.init(conexao)
        
        const app = customizacaoExpress();
        app.listen(3000, () => console.log('O Servidor está rodando na porta 3000...'));
    }
})


