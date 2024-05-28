const database = require('../models')

class FotoController {
    static async create(req, res) {
        const { email, senha, autenticacao } = req.body
        const perfilDTO = { email, senha, autenticacao }

        try {
            const newPerfil = await database.perfil.create(perfilDTO)
            return res.status(201).json({return: newPerfil !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }

    static async update(req, res) {
        const { id_perfil } = req.params
        const { nome, foto, senha, data_nascimento, sexo, biografia } = req.body
        const perfilDTO = { nome, foto, senha, data_nascimento, sexo, biografia }

        try {
            const updatedPerfil = await database.perfil.update(perfilDTO, {where: { id_perfil }, returning: true})
            return res.status(204).json({return: updatedPerfil !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }
}

module.exports = FotoController