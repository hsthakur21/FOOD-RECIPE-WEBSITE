
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    imageUrl: { type: String, required: true }, 
    video: { type: String, required: true }, 
    dietType: { type: String, required: true },
    category: { type: String, required: true },
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    difficulty: { type: String, required: true },
    time: { type: String, required: true },
    detail: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
