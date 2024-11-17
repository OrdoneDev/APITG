import { Router } from "express";
import { body, param } from "express-validator";

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
    getArquivoCompartilhadoById
  )

  .post(
    "/arquivocompartilhado",
    [
      body("id_entidade").isInt().withMessage("Id_entidade must be an integer"),
      body("titulo").notEmpty().withMessage("Titulo is required"),
      body("arquivo").notEmpty().withMessage("Arquivo is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
    ],
    insertArquivoCompartilhado
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
    updateArquivoCompartilhado
  )

  .delete(
    "/arquivocompartilhado/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    deleteArquivoCompartilhado
  );

export default router;