
const controller = require('../controllers/noticia')
//Importando express
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)//Create
router.get('/', controller.listar)//Retrieve (all)
router.get('/:id', controller.obterUm)//Retrieve (one) //joga o id como parametro
router.put('/', controller.atualizar)//Update
router.delete('/', controller.excluir)//DELETE


//Exportando router
module.exports = router 