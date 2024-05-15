const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const temas = require('./temasRoute')
const perguntas = require('./perguntasRoute')
const respostas = require('./respostasRoute')
const questionarios = require('./questionariosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        //usuarios,
    )
}