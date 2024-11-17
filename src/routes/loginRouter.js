import { Router } from 'express';
import { body } from 'express-validator';

import {
    createLogin,
    updateLogin,
    deleteLogin,
    getLoginById,
    getLogins,
    authenticateLogin,
} from '../controllers/loginController.js';

const router = Router()

router
    .post(
        '/login',
        [
            body('id_entidade').isInt().withMessage('id_entidade must be an integer'),
            body('email').isEmail().withMessage('Invalid email format'),
            body('senha').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        ],
        createLogin
    )

    .post(
        '/authenticate',
        [
            body('email').isEmail().withMessage('Invalid email format'),
            body('senha').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        ],
        authenticateLogin
    )

    .put(
        '/login/:id',
        [
            body('id_entidade').optional().isInt().withMessage('id_entidade must be an integer'),
            body('email').optional().isEmail().withMessage('Invalid email format'),
            body('senha').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        ],
        updateLogin
    )

    .delete('/login/:id', deleteLogin)
    .get('/login/:id', getLoginById)
    .get('/logins/', getLogins)

export default router;