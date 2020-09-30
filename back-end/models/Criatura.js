const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    nome_cientifico: {
        type: String,
        required: true
    },
    dieta: {
        type: String,
        required: true,
        enum: ['Carnívoro', 'Herbívoro', 'Onívoro', 'Fotossíntese']
    },
    tamanho: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    descobridor: {
        type: mongoose.ObjectId,
        ref: "Paleontologo",
        required: false
    },
    data_descoberta: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    surgimento: {
        type: mongoose.ObjectId,
        ref: 'Periodo',
        required: true,
        enum: ["Cambriano", "Ordoviciano", "Siluriano", "Devoniano", "Carbonífero", "Permiano", "Triássico", "Jurássico", "Cretáceo", "Paleógeno", "Neógeno", "Quaternário"]
    },
    extincao: {
        type: mongoose.ObjectId,
        ref: 'Periodo',
        required: true,
        enum: ["Cambriano", "Ordoviciano", "Siluriano", "Devoniano", "Carbonífero", "Permiano", "Triássico", "Jurássico", "Cretáceo", "Paleógeno", "Neógeno", "Quaternário"]
    },
    texto: {
        type: String,
        required: true
    },
    fonte: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Criatura', esquema, 'criaturas')