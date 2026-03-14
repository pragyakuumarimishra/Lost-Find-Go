import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import env from '../env';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, env.FILE_UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).replace(/[^a-zA-Z0-9.]/g, '');
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({ storage });

export { upload };