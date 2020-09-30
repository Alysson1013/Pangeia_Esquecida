const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        enum: ["Cambriano", "Ordoviciano", "Siluriano", "Devoniano", "Carbonífero", "Permiano", "Triássico", "Jurássico", "Cretáceo", "Paleógeno", "Neógeno", "Quaternário"],
        required: true
    },
    data_inicio: {
        type: String,
        required: true
    },
    data_fim: {
        type: String,
        required: true
    },
    duracao: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Periodo', esquema, 'periodos')