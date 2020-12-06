var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//variaveis de ambiente
const dbuser = process.env.PANGEIA_DB_USER
const dbpass = process.env.PANGEIA_DB_PASS
const dbname = process.env.PANGEIA_DB_NAME

//requisitando banco de dados
const db = require('./config/database')
//linkando ao atlas
db(`mongodb+srv://${dbuser}:${dbpass}@pangeiaesquecida.anlwz.mongodb.net/${dbname}?retryWrites=true&w=majority`)
var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Operações do CRUD
//Animais
const criatura = require('./routes/criatura')
app.use('/criatura', criatura)

//Notícias
const noticia = require('./routes/noticia')
app.use('/noticia', noticia)

//Paleontologos
const paleontologo = require('./routes/paleontologo')
app.use('/paleontologo', paleontologo)

//periodos
const periodo = require('./routes/periodo')
app.use('/periodo', periodo)

//Artigos
const artigo = require('./routes/artigo')
app.use('/artigo', artigo)


module.exports = app;
