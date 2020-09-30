const mongoose = require('mongoose')

<<<<<<< HEAD
//conexão do mongo
=======
//Conexão com banco de dados
>>>>>>> 39a2d6b29d0210d47f49c0fb7ab2413101fc52fd
module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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

<<<<<<< HEAD
    mongoose.connection.on('disconnected', () => {
        console.log('Moongose desconectado')
=======
    //Dá sinal de queda 
    mongoose.connection.on('disconnected', ()=>{
        console.log('==> Mongoose! desconectado do servidor')
>>>>>>> 39a2d6b29d0210d47f49c0fb7ab2413101fc52fd
    })
}