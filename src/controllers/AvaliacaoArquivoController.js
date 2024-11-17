import AvaliacaoArquivo from '../models/avaliacaoArquivo.js';
import { validationResult } from 'express-validator';

export const insertAvaliacaoArquivo = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nome, descricao, data_criacao, data_atualizacao } = req.body;
        const newAvaliacaoArquivo = await AvaliacaoArquivo.create({ nome, descricao, data_criacao, data_atualizacao });
        res.status(201).json(newAvaliacaoArquivo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateAvaliacaoArquivo = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { nome, descricao, data_criacao, data_atualizacao } = req.body;
        const [updated] = await AvaliacaoArquivo.update({ nome, descricao, data_criacao, data_atualizacao }, {
            where: { id_avaliacao: id }
        });

        if (updated) {
            const updatedAvaliacaoArquivo = await AvaliacaoArquivo.findByPk(id);
            res.status(200).json(updatedAvaliacaoArquivo);
        } else {
            res.status(404).json({ error: 'AvaliacaoArquivo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAvaliacaoArquivoById = async (req, res) => {
    try {
        const avaliacaoArquivo = await AvaliacaoArquivo.findByPk(req.params.id);
        if (avaliacaoArquivo) {
            res.status(200).json(avaliacaoArquivo);
        } else {
            res.status(404).json({ error: 'AvaliacaoArquivo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAvaliacoesArquivos = async (req, res) => {
    try {
        const avaliacaoArquivos = await AvaliacaoArquivo.findAll();
        res.status(200).json(avaliacaoArquivos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteAvaliacaoArquivo = async (req, res) => {
    try {
        const deleted = await AvaliacaoArquivo.destroy({
            where: { id_avaliacao: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'AvaliacaoArquivo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};