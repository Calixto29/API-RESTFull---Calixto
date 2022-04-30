module.exports = app => {
    app.get('/api', (req, res) => res.send('Você está na rota da API de agendamento de tarefas!')); 

    app.post('/api', (req, res) => {
        console.log(req.bady)
        res.send('Você está na rota da API e está fazendo o envio de informações!')
    });
}
