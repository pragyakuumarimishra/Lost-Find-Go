import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT || '4000',
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  NODE_ENV: process.env.NODE_ENV || 'development',
  FILE_UPLOAD_DIR: process.env.FILE_UPLOAD_DIR || './uploads',
};

export default env;