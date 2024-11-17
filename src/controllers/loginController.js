import Login from "../models/login.js";
import bcrypt from 'bcrypt';
import { validationResult } from "express-validator";

export const createLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const login = await Login.create(req.body);
    res.status(201).json(login);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const authenticateLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
      const login = await Login.findOne({ where: { email } });
      if (!login) {
          return res.status(404).json({ error: 'User not found' });
      }

      const isMatch = await bcrypt.compare(senha, login.senha);
      if (!isMatch) {
          return res.status(400).json({ error: 'Invalid credentials' });
      }

      res.status(200).json({ message: 'Authenticated successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

export const updateLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const login = await Login.update(req.body, {
      where: { id_login: req.params.id },
    });
    if (login[0] === 0) {
      return res.status(404).json({ error: "Login not found" });
    }
    res.status(200).json({ message: "Login updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLogin = async (req, res) => {
  try {
    const result = await Login.destroy({
      where: { id_login: req.params.id },
    });
    if (result === 0) {
      return res.status(404).json({ error: "Login not found" });
    }
    res.status(200).json({ message: "Login deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLoginById = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (!login) {
      return res.status(404).json({ error: "Login not found" });
    }
    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLogins = async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
