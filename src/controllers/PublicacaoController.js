const database = require('../models')

class PublicacaoController {
    static async create(req, res) {
        const { descricao } = req.body
        const publiccDTO = { descricao, data_publicacao: Date.now(), cancelado: false };

        try {
            const newPublicc = await database.publicacao.create(publiccDTO)
            return res.status(201).json({return: newPublicc !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }

    static async update(req, res) {
        const { id_publicacao } = req.params
        const { descricao } = req.body
        const publiccDTO = { descricao }

        try {
            const updatedPublicc = await database.publicacao.update(publiccDTO, {where: { id_publicacao }, returning: true})
            return res.status(204).json({return: updatedPublicc !== null})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }
}

module.exports = PublicacaoController