import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import View from '../dishplay/View';

const RecipeDetails = () => {
    const { recipeId } = useParams(); // Get recipe ID from the URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/recipes/${recipeId}`);
                setRecipe(response.data);
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <p className="text-center text-red-500">Loading recipe details...</p>;
    }

    return (
        <View>
          <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-6">{recipe.title}</h1>
            <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Recipe Image */}
                <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/2">
                    <img src={recipe.imageUrl} alt={recipe.title} className="rounded-lg shadow-lg w-full transition-transform duration-300 transform hover:scale-105" />
                </div>
                {/* Recipe Details */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">Ingredients</h2>
                    <ul className="list-disc ml-6 text-lg space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="transition-colors duration-200 hover:text-yellow-600">{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-yellow-400 pb-2">Instructions</h2>
                    <p className="text-lg bg-gray-100 p-4 rounded-lg shadow-inner">{recipe.instructions}</p>
                    {/* Video Section */}
                    {recipe.video && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">Watch Video</h2>
                            <iframe
                                width="100%"
                                height="315"
                                src={recipe.video}
                                title={recipe.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </View>
    );
};

export default RecipeDetails;
