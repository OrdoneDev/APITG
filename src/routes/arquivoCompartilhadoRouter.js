import { Router } from "express";
import { body, param } from "express-validator";
import verifyToken from "../middlewares/verifyToken.js"

import {
  insertArquivoCompartilhado,
  updateArquivoCompartilhado,
  getArquivoCompartilhadoById,
  getArquivosCompartilhados,
  deleteArquivoCompartilhado,
} from "../controllers/arquivoCompartilhadoController.js";

const router = Router();

router
  .get("/arquivoscompartilhados/", getArquivosCompartilhados)

  .get(
    "/arquivocompartilhado/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, getArquivoCompartilhadoById
  )

  .post(
    "/arquivocompartilhado",
    [
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("titulo").notEmpty().withMessage("Titulo is required"),
      body("arquivo").notEmpty().withMessage("Arquivo is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
    ],
    verifyToken, insertArquivoCompartilhado
  )

  .put(
    "/arquivocompartilhado/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("titulo").notEmpty().withMessage("Titulo is required"),
      body("arquivo").notEmpty().withMessage("Arquivo is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
    ],
    verifyToken, updateArquivoCompartilhado
  )

  .delete(
    "/arquivocompartilhado/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, deleteArquivoCompartilhado
  );

export default router;