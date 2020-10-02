const Noticia = require('../models/Noticia')

const controller = {}

controller.novo = async (req, res) => {
    try{
        await Noticia.create(req.body)
        res.status(201).end()
    } 
    catch(err){
        console.error(err)
        res.status(500).send(erro)
    }
}

controller.listar = async (req, res) => {
    try{
        let dados = await Noticia.find()
        res.send(dados)
    } 
    catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}

controller.obterUm = async (req, res) => {
    const id = req.params.id
    let obj = await Noticia.findById(id)

    if (obj) res.send(obj)
    else res.status(404).end()
}

controller.atualizar = async (req, res) => {
    try{
        const id = req.body._id
        let obj = await Noticia.findByIdAndUpdate(id, req.body)

        if(obj) res.status(204).end()
        else res.status(404).end()
    } catch(err){
        console.error(err)
        res.status(500).end()
    }
}

controller.excluir = async (req, res) => {
    try{
        const id = req.body._id
        let obj = await Noticia.findByIdAndDelete(id)
        if (obj) res.status(204).end()
        else res.status(404).end()
    } catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}

module.exports = controller