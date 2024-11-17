import Foto from '../models/foto.js';
import { validationResult } from 'express-validator';

export const insertFoto = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { foto, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const newFoto = await Foto.create({ foto, descricao, cancelado, data_publicacao, data_atualizacao });
        res.status(201).json(newFoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateFoto = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { foto, descricao, cancelado, data_publicacao, data_atualizacao } = req.body;
        const [updated] = await Foto.update({ foto, descricao, cancelado, data_publicacao, data_atualizacao }, {
            where: { id_foto: id }
        });

        if (updated) {
            const updatedFoto = await Foto.findByPk(id);
            res.status(200).json(updatedFoto);
        } else {
            res.status(404).json({ error: 'Foto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFotoById = async (req, res) => {
    try {
        const foto = await Foto.findByPk(req.params.id);
        if (foto) {
            res.status(200).json(foto);
        } else {
            res.status(404).json({ error: 'Foto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFotos = async (req, res) => {
    try {
        const fotos = await Foto.findAll();
        res.status(200).json(fotos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteFoto = async (req, res) => {
    try {
        const deleted = await Foto.destroy({
            where: { id_foto: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Foto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};