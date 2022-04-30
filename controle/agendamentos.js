module.exports = app => {
    app.get('/api', (req, res) => res.send('Você está na rota da API de agendamento de tarefas!')) //api = /atendimentos
}