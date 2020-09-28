const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    manchete: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Noticia', esquema, 'noticias')