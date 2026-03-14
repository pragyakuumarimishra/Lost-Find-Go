import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const requireAuth = (req: Request & { user?: unknown }, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(403).send('Access Denied');
    return;
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as Request & { user: unknown }).user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};