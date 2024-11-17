import ArquivoCompartilhado from '../models/arquivoCompartilhado.js';
import { validationResult } from 'express-validator';

export const insertArquivoCompartilhado = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_entidade, titulo, arquivo, descricao, score_medio, cancelado } = req.body;
        const newArquivoCompartilhado = await ArquivoCompartilhado.create({ id_entidade, titulo, arquivo, descricao, score_medio, cancelado });
        res.status(201).json(newArquivoCompartilhado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateArquivoCompartilhado = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { id_entidade, titulo, arquivo, descricao, score_medio, cancelado } = req.body;
        const [updated] = await ArquivoCompartilhado.update({ id_entidade, titulo, arquivo, descricao, score_medio, cancelado }, {
            where: { id_arquivo_compartilhado: id }
        });

        if (updated) {
            const updatedArquivoCompartilhado = await ArquivoCompartilhado.findByPk(id);
            res.status(200).json(updatedArquivoCompartilhado);
        } else {
            res.status(404).json({ error: 'ArquivoCompartilhado not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArquivoCompartilhadoById = async (req, res) => {
    try {
        const arquivoCompartilhado = await ArquivoCompartilhado.findByPk(req.params.id);
        if (arquivoCompartilhado) {
            res.status(200).json(arquivoCompartilhado);
        } else {
            res.status(404).json({ error: 'ArquivoCompartilhado not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArquivosCompartilhados = async (req, res) => {
    try {
        const arquivosCompartilhados = await ArquivoCompartilhado.findAll();
        res.status(200).json(arquivosCompartilhados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteArquivoCompartilhado = async (req, res) => {
    try {
        const deleted = await ArquivoCompartilhado.destroy({
            where: { id_arquivo_compartilhado: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'ArquivoCompartilhado not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};