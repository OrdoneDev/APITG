const database = require('../models')

class PerfilController {
    static async getAutentication(req, res) {
        const { email, senha, id_account } = req.body

        try {
            var perfil = null;

            if(senha) {
                perfil = await database.perfil.findOne({
                    where: {email: email, senha: senha}
                })
            } else if (id_account) {
                perfil = await database.perfil.findOne({
                    where: {email: email, autenticacao: id_account}
                })
            }

            return res.status(200).json(perfil)
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }

    static async createPerfil(req, res) {
        const { email, senha, autenticacao } = req.body
        const perfilDTO = { email, senha, autenticacao }

        try {
            const newPerfil = await database.perfil.create(perfilDTO)
            return res.status(201).json({return: {return: newPerfil !== null}})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }

    static async updatePerfil(req, res) {
        const { id_perfil } = req.params
        const { nome, foto, senha, data_nascimento, sexo, biografia } = req.body
        const perfilDTO = { nome, foto, senha, data_nascimento, sexo, biografia }

        try {
            const updatedPerfil = await database.perfil.update(perfilDTO, {where: { id_perfil }, returning: true})
            return res.status(204).json({return: {return: updatedPerfil !== null}})
        } catch(error) {
            return res.status(500).json({return: false, message: error.message})
        }
    }
}

module.exports = PerfilController