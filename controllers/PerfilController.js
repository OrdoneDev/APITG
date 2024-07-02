const Sequelize = require('sequelize')
const Op = Sequelize.Op
const database = require('../models')
const Questionarios = database.questionarios
const Perguntas = database.perguntas

class PerguntaController {
    static async getRandomPerguntasByUser(req, res) {
        const { id_usuario } = req.params

        try{
            const perguntas = await Perguntas.findAll({
                attributes: ['id_pergunta', 'pergunta', 'foto', 'banca', 'concurso', 'orgao', 'dificuldade', 'ano'],
                include: [
                    {
                        model: Questionarios,
                        attributes: [],
                        required: true,
                        where: { id_usuario: id_usuario }
                    }
                ],
                where: Sequelize.literal('Perguntas.id_pergunta != Questionarios.id_pergunta'),
                limit: 10
            })
            res.status(200).json(perguntas)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = PerguntaController