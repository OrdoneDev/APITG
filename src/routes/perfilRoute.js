const { Router } = require('express')
const PerfilController = require('../controllers/PerfilController')

const router = Router()

router
    .get('/perfil/login', PerfilController.getAutentication)
    .post('/perfil', PerfilController.createPerfil)
    .put('/perfil/:id_perfil', PerfilController.updatePerfil)

module.exports = router