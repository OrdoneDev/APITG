import Amizade from "../models/amizade.js";
import { validationResult } from "express-validator";

export const createAmizade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const amizade = await Amizade.create(req.body);
    res.status(201).json(amizade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAmizade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const [updated] = await Amizade.update(req.body, {
      where: { id_amizade: id },
    });
    if (updated) {
      const updatedAmizade = await Amizade.findOne({
        where: { id_amizade: id },
      });
      res.status(200).json(updatedAmizade);
    } else {
      res.status(404).json({ error: "Amizade not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAmizade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Amizade.destroy({ where: { id_amizade: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Amizade not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAmizadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const amizade = await Amizade.findOne({ where: { id_amizade: id } });
    if (amizade) {
      res.status(200).json(amizade);
    } else {
      res.status(404).json({ error: "Amizade not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAmizades = async (req, res) => {
  try {
    const amizades = await Amizade.findAll();
    res.status(200).json(amizades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*export const bulkInsertAmizades = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const amizades = await Amizade.bulkCreate(req.body);
    res.status(201).json(amizades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
