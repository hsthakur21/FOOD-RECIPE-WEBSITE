// CreateRecipe.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import View from "../dishplay/View";

const CreateRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    category: "",
    difficulty: "",
    imageUrl: "", 
    video: "", 
    time: "",
    detail: "",
    description: "",
    dietType: "",
    cookingTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://food-recipe-website-uy9h.onrender.com/api/recipes", recipeData);
      console.log("Recipe created successfully:", response.data);
      toast.success("Recipe created successfully!");
      setRecipeData({
        title: "",
        ingredients: "",
        instructions: "",
        prepTime: "",
        cookTime: "",
        servings: "",
        category: "",
        difficulty: "",
        imageUrl: "", 
        video: "", 
        time: "",
        detail: "",
        description: "",
        dietType: "",
        cookingTime: "",
      });
    } catch (error) {
      console.error("Error creating recipe:", error.response ? error.response.data : error.message);
      toast.error("Error creating recipe. Please try again.");
    }
  };

  return (
    <View>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredients (comma-separated)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.ingredients}
            onChange={handleChange}
            required
          />
          <textarea
            name="instructions"
            placeholder="Instructions"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.instructions}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dietType"
            placeholder="Diet Type (e.g. Vegetarian, Vegan, etc.)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.dietType}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="prepTime"
            placeholder="Preparation Time (minutes)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.prepTime}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cookTime"
            placeholder="Cooking Time (minutes)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.cookTime}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="servings"
            placeholder="Servings"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.servings}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Indian">Indian</option>
            <option value="South Indian">South Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
          </select>
          <input
            type="text"
            name="difficulty"
            placeholder="Difficulty"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.difficulty}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="imageUrl" // Input for image URL
            placeholder="Image URL (from Google or other sources)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.imageUrl}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="video"
            placeholder="Video URL (YouTube, Instagram, Facebook)"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.video}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="time"
            placeholder="Total Time"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.time}
            onChange={handleChange}
            required
          />
          <textarea
            name="detail"
            placeholder="Detail"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.detail}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded"
            value={recipeData.description}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
    </View>
  );
};

export default CreateRecipe;
