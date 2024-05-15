const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router
    .get('/user', UsuarioController.getAutentication)
    //.get('/user', UsuarioController.getAllUserByRanking)
    .post('/user', UsuarioController.createUser)
    .put('/user/:id_usuario', UsuarioController.updateUser)

module.exports = router