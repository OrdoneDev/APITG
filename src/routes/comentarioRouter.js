import { Router } from "express";
import { body, param } from "express-validator";
import verifyToken from "../middlewares/verifyToken.js"

import {
  insertComentario,
  updateComentario,
  getComentarioById,
  getComentarios,
  deleteComentario,
} from "../controllers/comentarioController.js";

const router = Router();

router
  .get("/comentarios/", verifyToken, getComentarios)

  .get(
    "/comentario/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, getComentarioById
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
    verifyToken, insertComentario
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
    verifyToken, updateComentario
  )

  .delete(
    "/comentario/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, deleteComentario
  );

export default router;