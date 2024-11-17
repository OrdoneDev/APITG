import { Router } from "express";
import { body, param } from "express-validator";

import {
  insertComentario,
  updateComentario,
  getComentarioById,
  getComentarios,
  deleteComentario,
} from "../controllers/comentarioController.js";

const router = Router();

router
  .get("/comentarios/", getComentarios)

  .get(
    "/comentario/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    getComentarioById
  )

  .post(
    "/comentario",
    [
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("id_publicacao").isInt().withMessage("Id_publicacao must be an integer"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    insertComentario
  )

  .put(
    "/comentario/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("id_publicacao").isInt().withMessage("Id_publicacao must be an integer"),
      body("descricao").notEmpty().withMessage("Descricao is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    updateComentario
  )

  .delete(
    "/comentario/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    deleteComentario
  );

export default router;