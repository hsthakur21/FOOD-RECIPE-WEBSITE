import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import userRoutes from './routes/userRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDb();

// Use user routes
app.use('/api/auth', userRoutes); 
app.use('/api/recipes', recipeRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`); 
});
