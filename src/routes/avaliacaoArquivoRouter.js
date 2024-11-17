import { Router } from "express";
import { body, param } from "express-validator";
import verifyToken from "../middlewares/verifyToken.js"

import {
  insertAvaliacaoArquivo,
  updateAvaliacaoArquivo,
  getAvaliacaoArquivoById,
  getAvaliacoesArquivos,
  deleteAvaliacaoArquivo,
} from "../controllers/avaliacaoArquivoController.js";

const router = Router();

router
  .get("/avaliacoes/", verifyToken, getAvaliacoesArquivos)

  .get(
    "/avaliacao/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, getAvaliacaoArquivoById
  )

  .post(
    "/avaliacao",
    [
      body("nome").notEmpty().withMessage("Nome is required"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("data_criacao")
        .isISO8601()
        .withMessage("Data_criacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    verifyToken, insertAvaliacaoArquivo
  )

  .put(
    "/avaliacao/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("nome").notEmpty().withMessage("Nome is required"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("data_criacao")
        .isISO8601()
        .withMessage("Data_criacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    verifyToken, updateAvaliacaoArquivo
  )

  .delete(
    "/avaliacao/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, deleteAvaliacaoArquivo
  );

export default router;