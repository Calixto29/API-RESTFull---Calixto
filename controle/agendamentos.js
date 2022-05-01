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
}






