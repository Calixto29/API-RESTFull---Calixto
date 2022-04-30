module.exports = app => {
    app.get('/api', (req, res) => res.send('Você está na rota da API de agendamento de tarefas!')); 

    app.post('/api', (req, res) => {
        console.log(req.body)

        console.log('Atendimento enviado!')
        
        res.send('Post atendimento!')
    });
}

