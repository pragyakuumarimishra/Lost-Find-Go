import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const router = Router();

router.post('/register', async (req, res) => {
  // registration logic
});

router.post('/login', async (req, res) => {
  // login logic
});

export default router;