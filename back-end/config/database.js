const mongoose = require('mongoose')

//conexão do mongo
module.exports = uri => {
    //URI, string de conexão do atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true

    })

    mongoose.connection.on('connected', () => {
        console.log('Mongo conectado ao servidor')
    })

    //Encerramento 
    process.on('SIGINT', () => {
        console.log('Mongoose! Desconectado pelo sim da aplicação')
        process.exit(0)
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Moongose desconectado')
    })
}