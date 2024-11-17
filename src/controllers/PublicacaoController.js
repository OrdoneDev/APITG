import Publicacao from '../models/publicacao.js';
import { validationResult } from 'express-validator';

export const insertPublicacao = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_entidade, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const newPublicacao = await Publicacao.create({ id_entidade, descricao, cancelado, data_publicacao, data_atualizacao });
        res.status(201).json(newPublicacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePublicacao = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { id_entidade, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const [updated] = await Publicacao.update({ id_entidade, descricao, cancelado, data_publicacao, data_atualizacao }, {
            where: { id_publicacao: id }
        });

        if (updated) {
            const updatedPublicacao = await Publicacao.findByPk(id);
            res.status(200).json(updatedPublicacao);
        } else {
            res.status(404).json({ error: 'Publicacao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPublicacaoById = async (req, res) => {
    try {
        const publicacao = await Publicacao.findByPk(req.params.id);
        if (publicacao) {
            res.status(200).json(publicacao);
        } else {
            res.status(404).json({ error: 'Publicacao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPublicacoes = async (req, res) => {
    try {
        const publicacoes = await Publicacao.findAll();
        res.status(200).json(publicacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePublicacao = async (req, res) => {
    try {
        const deleted = await Publicacao.destroy({
            where: { id_publicacao: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Publicacao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};