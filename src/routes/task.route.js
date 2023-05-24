import { Router } from 'express';
import { verifyToken } from '../middlewares/validateToken.js';
import { getData } from '../controllers/task.controllers.js';

const router = Router();

router.get('/', getData);
// router.get('/', [verifyToken], getData);


export default router;
