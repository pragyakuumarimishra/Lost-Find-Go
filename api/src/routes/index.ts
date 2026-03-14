import { Router } from 'express';
import authRouter from './modules/auth';
import ticketRouter from './modules/tickets';
import uploadRouter from './modules/upload';

const router = Router();

router.use(authRouter);
router.use(ticketRouter);
router.use(uploadRouter);

export default router;