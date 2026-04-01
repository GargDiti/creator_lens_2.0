import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import creatorRoutes from './routes/creators.js';
import reportRoutes from './routes/reports.js';
import authRoutes from './routes/auth.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import seedCreators from './seed/creators.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/creatorlens';

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/creators', creatorRoutes);
app.use('/api/reports', reportRoutes);

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await seedCreators();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Mongo connection error:', err);
    process.exit(1);
  });
