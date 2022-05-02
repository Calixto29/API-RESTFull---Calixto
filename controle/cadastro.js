const { alterarDados, pesquisarIdUser } = require('../modelos/acoes');
const Cadastro = require('../modelos/acoes')

module.exports = app => {

    //Listar User
    app.get('/api/v1/user', (req, res) => {
        Cadastro.listarUser(res)
    }); 

    //Pesquisar User pelo ID
    app.get('/api/v1/user/:id', (req, res)=> {
        const id = parseInt(req.params.id)

        Cadastro.pesquisarIdUser(id, res)
        
        
    });

    //Cadastrar User
    app.post('/api/v1/user', (req, res) => {
        const cadastro = req.body

        Cadastro.criaUser(cadastro, res) 
                
    });

    //Alterar dados do User
    app.patch('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Cadastro.alterarDados(id, valores, res)
    });
    
    //Deletar User
    app.delete('/api/v1/user/:id' , (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.deletarDados(id, res)
    });
    
    //Listar Task
    app.get('/api/v1/task', (req, res) => {
        Cadastro.listarTask(res)
    }); 

    //Pesquisar Task
    app.get('/api/v1/task/:id', (req, res)=> {
        const id = parseInt(req.params.id)

        Cadastro.pesquisarIdTask(id, res)
        
    });

    //Criar Task
    app.post('/api/v1/task', (req, res) => {
        const cadastro = req.body

        Cadastro.criaTask(cadastro, res) 
                
    });

    //Alterar dados da Task
    app.patch('/api/v1/task/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Cadastro.alterarDadosTask(id, valores, res)
    });
    

    //Deletar Task
    app.delete('/api/v1/task/:id' , (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.deletarDadosTask(id, res)
    });
}






