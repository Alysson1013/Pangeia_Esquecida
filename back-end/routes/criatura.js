const express = require('express')

const controller = require('../controllers/criatura')

const router = express.Router()

router.post('/', controller.novo)
router.get('/', controller.listar)
router.get('/:id', controller.obterUm)
router.put('/', controller.atualizar)
router.delete('/', controller.excluir)

module.exports = router