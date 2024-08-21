import express from 'express';
import authRoutes from './routes/auth-route.js';
import messageRoutes from './routes/message-route.js';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(cookieParser()); 
app.use(express.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

