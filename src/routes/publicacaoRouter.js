import { Router } from "express";
import { body, param } from "express-validator";

import {
  insertPublicacao,
  updatePublicacao,
  getPublicacaoById,
  getPublicacoes,
  deletePublicacao,
} from "../controllers/publicacaoController.js";

const router = Router();

router
  .get("/publicacoes/", getPublicacoes)

  .get(
    "/publicacao/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    getPublicacaoById
  )

  .post(
    "/publicacao",
    [
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    insertPublicacao
  )

  .put(
    "/publicacao/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    updatePublicacao
  )

  .delete(
    "/publicacao/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    deletePublicacao
  );

export default router;