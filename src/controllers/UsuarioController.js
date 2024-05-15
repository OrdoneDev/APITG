const database = require('../models')

class UsuarioController {
    //TODO getAllUserByRanking

    static async getAutentication(req, res) {
        const { email, senha, id_account } = req.body

        try {
            var usuario = null;

            if(senha) {
                usuario = await database.usuarios.findOne({
                    where: {email: email, senha: senha}
                })
            } else {
                usuario = await database.usuarios.findOne({
                    where: {email: email, autenticacao: id_account}
                })
            }

            return res.status(200).json(usuario !== null)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const { nome, foto, email, senha, autenticacao } = req.body
        const userDTO = { nome, foto, email, senha, autenticacao }

        try {
            const newUser = await database.usuarios.create(userDTO)
            return res.status(201).json(newUser !== null)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const { id_usuario } = req.params
        const { nome, foto, senha } = req.body
        const userDTO = { nome, foto, senha }

        try {
            const userUpdated = await database.usuarios.update(userDTO, {where: { id_usuario }, returning: true})
            return res.status(204).json(userUpdated !== null)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController