import { Router } from 'express';
import { check } from 'express-validator';
import verifyToken from "../middlewares/verifyToken.js"

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
        verifyToken, createAmizade
    )

    .put(
        '/amizade/:id',
        [
            check('id_entidade1').optional().isInt().withMessage('id_entidade1 must be an integer'),
            check('id_entidade2').optional().isInt().withMessage('id_entidade2 must be an integer'),
            check('status').optional().isIn(['pendente', 'aceito', 'recusado']).withMessage('Invalid status')
        ],
        verifyToken, updateAmizade
    )

    .delete('/amizade/:id', verifyToken, deleteAmizade)
    .get('/amizade/:id', verifyToken, getAmizadeById)
    .get('/amizades/', verifyToken, getAmizades)

export default router