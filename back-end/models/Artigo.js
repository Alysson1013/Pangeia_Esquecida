//Fazendo Requisão do Mongoose
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
    fonte: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Artigo', esquema, 'artigos')