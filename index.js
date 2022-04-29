const express = require('express');
const app = express();
app.listen(3000, () =>console.log('O Servidor está rodando na porta 3000'))
app.get('/api', (req, res) => res.send('Você está na rota da API de agendamento de tarefas!')) //api = /atendimentos