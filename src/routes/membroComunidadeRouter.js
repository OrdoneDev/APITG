import { Router } from "express";
import { body, param } from "express-validator";

import {
  insertMembroComunidade,
  updateMembroComunidade,
  getMembroComunidadeById,
  getMembroComunidades,
  deleteMembroComunidade,
} from "../controllers/membroComunidadeController.js";

const router = Router();

router
  .get("/membros/", getMembroComunidades)

  .get(
    "/membro/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    getMembroComunidadeById
  )

  .post(
    "/membro",
    [
      body("id_entidade").isInt().withMessage("ID Entidade is required"),
      body("id_comunidade").isInt().withMessage("ID Comunidade is required"),
      body("cargo").isInt().withMessage("Cargo is required"),
      body("status").isIn(['pendente', 'aceito', 'recusado']).withMessage("Status must be 'pendente', 'aceito', or 'recusado'"),
    ],
    insertMembroComunidade
  )

  .put(
    "/membro/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("id_entidade").isInt().withMessage("ID Entidade is required"),
      body("id_comunidade").isInt().withMessage("ID Comunidade is required"),
      body("cargo").isInt().withMessage("Cargo is required"),
      body("status").isIn(['pendente', 'aceito', 'recusado']).withMessage("Status must be 'pendente', 'aceito', or 'recusado'"),
    ],
    updateMembroComunidade
  )

  .delete(
    "/membro/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    deleteMembroComunidade
  );

export default router;