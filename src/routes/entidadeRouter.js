import { Router } from 'express';

import { createEntidade, 
    getEntitades, 
    getEntidadeById, 
    updateEntidade } from '../controllers/entidadeController.js';

const router = Router()

router
    .get('/entidades', getEntitades)
    .get('/entidades/:id', getEntidadeById)
    .post('/entidades', createEntidade)
    .put('/entidades/:id', updateEntidade)

export default router