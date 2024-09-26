import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import View from '../dishplay/View';
import { FaUtensils } from 'react-icons/fa';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://food-recipe-website-uy9h.onrender.com/api/recipes/categories');
                console.log("Fetched Categories:", response.data);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const filteredCategories = categories.filter(category =>
        category._id && category._id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold text-gray-900 my-5">Recipe Categories</h1>
                <p className="text-center text-lg text-gray-500 mb-6">Find your favorite recipes by browsing categories</p>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <Link to={`/recipes/${category._id}`} key={category._id}>
                                <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                    {/* Image with dark overlay */}
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${category.exampleImage})`,
                                            filter: 'brightness(0.6)',
                                        }}>
                                    </div>
                                    {/* Category details */}
                                    <div className="relative z-10 p-6 bg-gradient-to-t from-black/75 to-transparent rounded-lg h-full flex flex-col justify-end">
                                        <div className="text-center text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                                            <FaUtensils className="inline-block mr-2" />
                                            {category._id}
                                        </div>
                                        <p className="text-center text-sm text-gray-300 group-hover:text-white">
                                            {category.count} Recipes
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center col-span-4 text-red-500">No categories found.</p>
                    )}
                </div>
            </div>
        </View>
    );
};

export default Categories;
