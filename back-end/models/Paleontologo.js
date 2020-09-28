const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: String,
        required: true
    },
    data_falecimento: {
        type: String,
        required: false
    },
    texto: {
        type: String,
        required: true
    },
    especializacao: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Paleontologo', esquema, 'paleontologos')