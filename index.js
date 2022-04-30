const customizacaoExpress = require('./configurações/customizacaoExpress');

const app = customizacaoExpress();

app.listen(3000, () => console.log('O Servidor está rodando na porta 3000'));
