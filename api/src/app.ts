import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import routes from './routes';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/v1', routes);

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

export default app;