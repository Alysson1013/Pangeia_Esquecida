mongoose = require('mongoose')

const esquema = mongoose.Schema({
    titulo: {
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
    },
    autor: {
        type: String,
        required: true
    },
    criaturaRef: {
        type: mongoose.ObjectId,
        ref: 'Criatura',
        required: false
    },
    periodoRef: {
        type: mongoose.ObjectId,
        ref: 'Periodo',
        required: false
    },
    paleontologoRef: {
        type: mongoose.ObjectId,
        ref: 'Paleontologo',
        required: false
    },
    fonte: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Artigo', esquema, 'artigos')