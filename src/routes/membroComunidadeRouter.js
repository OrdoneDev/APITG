import { Router } from "express";
import { body, param } from "express-validator";
import verifyToken from "../middlewares/verifyToken.js"

import {
  insertMembroComunidade,
  updateMembroComunidade,
  getMembroComunidadeById,
  getMembrosComunidade,
  deleteMembroComunidade,
} from "../controllers/membroComunidadeController.js";

const router = Router();

router
  .get("/membros/", verifyToken, getMembrosComunidade)

  .get(
    "/membro/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, getMembroComunidadeById
  )

  .post(
    "/membro",
    [
      body("id_entidade").isInt().withMessage("ID Entidade is required"),
      body("id_comunidade").isInt().withMessage("ID Comunidade is required"),
      body("cargo").isInt().withMessage("Cargo is required"),
      body("status").isIn(['pendente', 'aceito', 'recusado']).withMessage("Status must be 'pendente', 'aceito', or 'recusado'"),
    ],
    verifyToken, insertMembroComunidade
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
    verifyToken, updateMembroComunidade
  )

  .delete(
    "/membro/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, deleteMembroComunidade
  );

export default router;