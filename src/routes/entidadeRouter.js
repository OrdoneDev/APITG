import { Router } from 'express';
import verifyToken from "../middlewares/verifyToken.js"

import { createEntidade, 
    getEntitades, 
    getEntidadeById, 
    updateEntidade } from '../controllers/entidadeController.js';

const router = Router()

router
    .get('/entidades', verifyToken, getEntitades)
    .get('/entidades/:id', verifyToken, getEntidadeById)
    .post('/entidades', createEntidade)
    .put('/entidades/:id', verifyToken, updateEntidade)

export default router