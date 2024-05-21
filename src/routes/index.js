const bodyParser = require('body-parser')
const perfil = require('./perfilRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        perfil
    )
}