import express from 'express';
import multer from 'multer';
import { 
  createRecipe, 
  getRecipesByCategory ,
  getRecipeById, 
  updateRecipe, 
  deleteRecipe, 
  getCategories 
} from '../controllers/recipeController.js';

const router = express.Router();

// Configure multer for image uploads

// Create a new recipe
router.post('/', createRecipe);

// Get categories from recipes
router.get('/categories', getCategories);

// Get all recipes
router.get('/categories/:categoryId/recipes', getRecipesByCategory);

// Get a recipe by ID
router.get('/:id', getRecipeById);



export default router;
