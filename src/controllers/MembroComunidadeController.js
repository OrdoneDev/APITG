import MembroComunidade from '../models/membroComunidade.js';
import { validationResult } from 'express-validator';

export const insertMembroComunidade = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_entidade, id_comunidade, cargo, status } = req.body;
        const newMembroComunidade = await MembroComunidade.create({ id_entidade, id_comunidade, cargo, status });
        res.status(201).json(newMembroComunidade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateMembroComunidade = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { id_entidade, id_comunidade, cargo, status } = req.body;
        const [updated] = await MembroComunidade.update({ id_entidade, id_comunidade, cargo, status }, {
            where: { id_membro: id }
        });

        if (updated) {
            const updatedMembroComunidade = await MembroComunidade.findByPk(id);
            res.status(200).json(updatedMembroComunidade);
        } else {
            res.status(404).json({ error: 'MembroComunidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMembroComunidadeById = async (req, res) => {
    try {
        const membroComunidade = await MembroComunidade.findByPk(req.params.id);
        if (membroComunidade) {
            res.status(200).json(membroComunidade);
        } else {
            res.status(404).json({ error: 'MembroComunidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMembrosComunidade = async (req, res) => {
    try {
        const membroComunidades = await MembroComunidade.findAll();
        res.status(200).json(membroComunidades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteMembroComunidade = async (req, res) => {
    try {
        const deleted = await MembroComunidade.destroy({
            where: { id_membro: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'MembroComunidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};