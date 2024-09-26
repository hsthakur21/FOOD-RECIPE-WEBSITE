import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FaClock, FaStar } from 'react-icons/fa';
import View from '../dishplay/View';

const RecipesList = () => {
    const { categoryId } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://food-recipe-website-uy9h.onrender.com/api/recipes/categories/${categoryId}/recipes`);
                setRecipes(response.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError('Failed to fetch recipes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [categoryId]);

    const filteredRecipes = recipes.filter(recipe => 
        recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
                <h1 className="text-center text-3xl font-extrabold text-gray-900 my-5">Recipes</h1>

                <Link to="/createrecipe" className="absolute top-5 right-5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full border-2 border-green-400 hover:border-blue-500 transition duration-300">
                    Create Your Own Recipe
                </Link>

                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Search by recipe name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map(recipe => (
                                <Link to={`/recipe/${recipe._id}`} key={recipe._id}>
                                    <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${recipe.imageUrl})`,
                                                filter: 'brightness(0.8)',
                                            }}></div>
                                        <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black/75 to-transparent rounded-lg h-full flex flex-col justify-end">
                                            <h3 className="text-center text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                                                {recipe.title}
                                            </h3>
                                            <p className="text-center text-sm text-gray-300 mb-1">
                                                <FaClock className="inline-block mr-1" /> {recipe.time} min
                                            </p>
                                            <p className="text-center text-sm text-yellow-300">
                                                <FaStar className="inline-block mr-1" /> {recipe.rating} Stars
                                            </p>
                                            {/* YouTube link ko anchor tag me display karein */}
                                            {recipe.youtubeLink && (
                                                <a
                                                    href={recipe.youtubeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-center text-blue-500 mt-2 hover:underline"
                                                >
                                                    Watch Recipe Video
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center col-span-3 text-red-500">No recipes found for this category.</p>
                        )}
                    </div>
                )}
            </div>
        </View>
    );
};

export default RecipesList;
