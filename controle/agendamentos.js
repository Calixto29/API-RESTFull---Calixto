const Cadastro = require('../modelos/acoes')

module.exports = app => {
    app.get('/api', (req, res) => res.send('Você está na rota da API de agendamento de tarefas!')); 

    app.post('/api', (req, res) => {
        const cadastro = req.body

        Cadastro.cria(cadastro) //erro
        
        res.send('Post de Agendamento!')
    });
}






