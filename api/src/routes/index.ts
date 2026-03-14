import { Router } from 'express';
import authRouter from './modules/auth';
import ticketRouter from './modules/tickets';

const router = Router();

router.use('/auth', authRouter);
router.use('/tickets', ticketRouter);

export default router;