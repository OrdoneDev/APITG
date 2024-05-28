const database = require('../models')

class ComunidadeController {
    static async create(req, res) {
        const { foto, nome, descricao, visibilidade } = req.body
        const comunidadeDTO = { foto, nome, descricao, visibilidade, cancelado: false }

        try {
            const newComunid = await database.comunidade.create(comunidadeDTO)
            return res.status(201).json({return: newComunid !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }

    static async update(req, res) {
        const { id_perfil } = req.params
        const { nome, foto, senha, data_nascimento, sexo, biografia } = req.body
        const comunidadeDTO = { nome, foto, senha, data_nascimento, sexo, biografia }

        try {
            const updatedComunid = await database.comunidade.update(comunidadeDTO, {where: { id_perfil }, returning: true})
            return res.status(204).json({return: updatedComunid !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }
}

module.exports = ComunidadeController