// fotoRoutes.js
import { Router } from "express";
import { body, param } from "express-validator";
import verifyToken from "../middlewares/verifyToken.js"

import {
  insertFoto,
  updateFoto,
  getFotoById,
  getFotos,
  deleteFoto,
} from "../controllers/fotoController.js";

const router = Router();

router
  .get("/fotos/", verifyToken, getFotos)

  .get(
    "/foto/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, getFotoById
  )

  .post(
    "/foto",
    [
      body("foto").notEmpty().withMessage("Foto is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    verifyToken, insertFoto
  )

  .put(
    "/foto/:id",
    [
      param("id").isInt().withMessage("ID must be an integer"),
      body("foto").notEmpty().withMessage("Foto is required"),
      body("cancelado").isBoolean().withMessage("Cancelado must be a boolean"),
      body("data_publicacao")
        .isISO8601()
        .withMessage("Data_publicacao must be a valid date"),
      body("data_atualizacao")
        .isISO8601()
        .withMessage("Data_atualizacao must be a valid date"),
    ],
    verifyToken, updateFoto
  )

  .delete(
    "/foto/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    verifyToken, deleteFoto
  );

export default router;
