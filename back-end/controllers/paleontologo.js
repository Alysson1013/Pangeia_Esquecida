const Paleontologo = require('../models/Paleontologo')

//Objeto das funções do CRUD
const controller = {}

controller.novo = async (req, res) => {
    try {
        await Paleontologo.create(req.body)
        res.status(201).end()
    }
    catch (erro) {
        console.error(erro)
        //Retorna protocolor 500
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

controller.listar = async (req, res) => {
    try {
        let dados = await Paleontologo.find()
        res.send(dados)
    }
    catch (erro) {
        console.log(erro) 
        res.status(500).send(erro)
    }

}

controller.obterUm = async (req, res) => {
    const id = req.params.id 
    let obj = await Paleontologo.findById(id) 

    if (obj) res.send(obj)
    else res.status(404).end()

}

controller.atualizar = async (req, res) => {
    try {
        const id = req.body._id
        let obj = await Paleontologo.findByIdAndUpdate(id, req.body)

        if (obj) res.status(204).end()
        else res.status(404).end()
    } catch {
        console.error(erro)
        res.status(500).end()
    }
}

controller.excluir = async (req, res) => {
    try { 
        const id = req.body._id
        let obj = await Paleontologo.findByIdAndDelete(id)

        if (obj) res.status(204).end()
        else res.status(404).end()
    } catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}
module.exports = controller