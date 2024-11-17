import { Router } from 'express';
import { check } from 'express-validator';

import { 
    createAmizade, 
    updateAmizade, 
    deleteAmizade, 
    getAmizadeById, 
    getAmizades } from '../controllers/amizadeController.js';

const router = Router()

router
    .post(
        '/amizade',
        [
            check('id_entidade1').isInt().withMessage('id_entidade1 must be an integer'),
            check('id_entidade2').isInt().withMessage('id_entidade2 must be an integer'),
            check('status').isIn(['pendente', 'aceito', 'recusado']).withMessage('Invalid status')
        ],
        createAmizade
    )

    .put(
        '/amizade/:id',
        [
            check('id_entidade1').optional().isInt().withMessage('id_entidade1 must be an integer'),
            check('id_entidade2').optional().isInt().withMessage('id_entidade2 must be an integer'),
            check('status').optional().isIn(['pendente', 'aceito', 'recusado']).withMessage('Invalid status')
        ],
        updateAmizade
    )

    .delete('/amizade/:id', deleteAmizade)
    .get('/amizade/:id', getAmizadeById)
    .get('/amizades/', getAmizades)

export default router