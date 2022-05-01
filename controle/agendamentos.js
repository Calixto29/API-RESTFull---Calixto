const { alterarDados } = require('../modelos/acoes');
const Cadastro = require('../modelos/acoes')

module.exports = app => {
    app.get('/api', (req, res) => {
        Cadastro.listarUser(res)
    }); 

    app.get('/api/:id', (req, res)=> {
        const id = parseInt(req.params.id)

        Cadastro.pesquisarIdUser(id, res)
        
    })

    app.post('/api', (req, res) => {
        const cadastro = req.body

        Cadastro.criaUser(cadastro, res) 
        
        
    });
    app.patch('/api/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Cadastro.alterarDados(id, valores, res)
    })
    
    app.delete('/api/:id' , (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.deletarDados(id, res)
    })
}






