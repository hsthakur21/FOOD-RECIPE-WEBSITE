import Recipe from '../models/recipeModel.js';

// Create a new recipe
// Controller for creating a recipe
export const createRecipe = async (req, res) => {
  const {
    title,
    ingredients,
    instructions,
    imageUrl, // URL-based image input
    video,
    dietType,
    category,
    prepTime,
    cookTime,
    servings,
    difficulty,
    time,
    detail,
    description,
  } = req.body;

  try {
    // Create a new recipe object
    const newRecipe = new Recipe({
      title,
      ingredients: ingredients.split(',').map(item => item.trim()), // handle comma-separated ingredients
      instructions,
      imageUrl,
      video,
      dietType,
      category,
      prepTime,
      cookTime,
      servings,
      difficulty,
      time,
      detail,
      description,
    });

    // Save the recipe to the database
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Error creating recipe', error });
  }
};
// gett category

export const getCategories = async (req, res) => {
  try {
    const categories = await Recipe.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          exampleImage: { $first: "$imageUrl" } // Get the image URL of the first recipe
        }
      }
    ]);
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




// Get all recipes
export const getRecipesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId || 'veg'; // default to 'veg'
    const recipes = await Recipe.find({ category: categoryId });

    if (!recipes.length) {
      return res.status(404).json({ message: 'No recipes found for this category.' });
    }

    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};


// Get a recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a recipe by ID
export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a recipe by ID
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
