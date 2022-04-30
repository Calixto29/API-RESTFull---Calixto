const customizacaoExpress = require('./configurações/customizacaoExpress');

const conexao = require('./conexaoBd/conexao')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }else {
        console.log('conectado ao banco com sucesso')

        const app = customizacaoExpress();
        app.listen(3000, () => console.log('O Servidor está rodando na porta 3000'));
    }
})


