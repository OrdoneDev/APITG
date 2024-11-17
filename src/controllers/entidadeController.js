import Entidade from '../models/entidade.js';

export const createEntidade = async (req, res) => {
    try {
        const entidade = await Entidade.create(req.body);
        res.status(201).json(entidade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getEntidadeById = async (req, res) => {
    try {
        const entidade = await Entidade.findByPk(req.params.id);
        if (entidade) {
            res.status(200).json(entidade);
        } else {
            res.status(404).json({ error: 'Entidade not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getEntitades = async (req, res) => {
    try {
        const entidades = await Entidade.findAll();
        res.status(200).json(entidades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateEntidade = async (req, res) => {
    try {
        const [updated] = await Entidade.update(req.body, {
            where: { id_entidade: req.params.id }
        });
        if (updated) {
            const updatedEntidade = await Entidade.findByPk(req.params.id);
            res.status(200).json(updatedEntidade);
        } else {
            res.status(404).json({ error: 'Entidade not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteEntidade = async (req, res) => {
    try {
        const deleted = await Entidade.destroy({
            where: { id_entidade: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Entidade not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/*export const bulkInsertEntidades = async (req, res) => {
    try {
        const entidades = await Entidade.bulkCreate(req.body);
        res.status(201).json(entidades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};*/
