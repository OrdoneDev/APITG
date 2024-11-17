// fotoRoutes.js
import { Router } from "express";
import { body, param } from "express-validator";

import {
  insertFoto,
  updateFoto,
  getFotoById,
  getFotos,
  deleteFoto,
} from "../controllers/fotoController.js";

const router = Router();

router
  .get("/fotos/", getFotos)

  .get(
    "/foto/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    getFotoById
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
    insertFoto
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
    updateFoto
  )

  .delete(
    "/foto/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    deleteFoto
  );

export default router;
