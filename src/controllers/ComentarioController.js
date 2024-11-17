import Comentario from '../models/comentario.js';
import { validationResult } from 'express-validator';

export const insertComentario = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_entidade, id_publicacao, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const newComentario = await Comentario.create({ id_entidade, id_publicacao, descricao, cancelado, data_publicacao, data_atualizacao });
        res.status(201).json(newComentario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateComentario = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { id_entidade, id_publicacao, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const [updated] = await Comentario.update({ id_entidade, id_publicacao, descricao, cancelado, data_publicacao, data_atualizacao }, {
            where: { id_comentario: id }
        });

        if (updated) {
            const updatedComentario = await Comentario.findByPk(id);
            res.status(200).json(updatedComentario);
        } else {
            res.status(404).json({ error: 'Comentario not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getComentarioById = async (req, res) => {
    try {
        const comentario = await Comentario.findByPk(req.params.id);
        if (comentario) {
            res.status(200).json(comentario);
        } else {
            res.status(404).json({ error: 'Comentario not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteComentario = async (req, res) => {
    try {
        const deleted = await Comentario.destroy({
            where: { id_comentario: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Comentario not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};