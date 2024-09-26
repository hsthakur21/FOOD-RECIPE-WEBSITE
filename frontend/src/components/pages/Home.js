import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import View from "../dishplay/View";

const Home = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(""); // State for filter
  const [showFilter, setShowFilter] = useState(true); // State to manage filter visibility

  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      time: "20 minutes",
      category: "Pasta",
      image: "https://media.istockphoto.com/id/943785646/photo/spaghetti-carbonara-with-garlic-bread.jpg?s=2048x2048&w=is&k=20&c=pTzcI5e9g-lJRxIhRai1BFCwDCe16CWquwWaXHoq3Ag=",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Chicken Curry",
      time: "45 minutes",
      category: "Main Course",
      image: "https://www.theflavorbender.com/wp-content/uploads/2018/02/Sri-Lankan-Chicken-Curry-The-Flavor-Bender-Featured-Image-SQ-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Caesar Salad",
      time: "15 minutes",
      category: "Salad",
      image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Classic_Ceaser_Salad_Recipe_6_400.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      time: "1 hour",
      category: "Dessert",
      image: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTHtQ-eXsljBaNo7G4AjmJe01i82aVyxRn0mO0C4SFj0ZS7sqMY_v8GW6b-vsMDwbz1",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const handleRecipeClick = (recipe) => {
    const isLoggedIn = false; // Replace with your actual authentication logic

    if (isLoggedIn) {
      navigate(`/recipe/${recipe.id}`, { state: { recipe } });
    } else {
      alert("Please log in to view recipe details and videos.");
      navigate("/login");
    }
  };

  const handleStartCookingClick = () => {
    navigate("/login");
  };

  // Filtered recipes based on the filter state
  const filteredRecipes = recipes.filter(recipe => {
    return recipe.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <View>
      <div className="container mx-auto p-6 flex flex-col bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] min-h-screen">
        {/* Filter Section */}
        {showFilter && (
          <div className="w-full p-4 bg-white rounded-lg shadow-lg mb-4" style={{ height: '10vh' }}>
            <h2 className="text-xl font-bold mb-2 text-gray-700">Filter Recipes</h2>
            <input
              type="text"
              placeholder="Search by category"
              className="w-full h-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        )}

        {/* Main Content Section */}
        <div className="flex flex-col pt-5">
          {/* Top Image and Button */}
          <div className="relative mb-4 w-full">
            <img
              src="https://img.pikbest.com/origin/09/28/86/45wpIkbEsT7fg.jpg!w700wp" // Replace with your desired top image
              alt="Top Cooking"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <button
              onClick={handleStartCookingClick}
              className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Start Cooking
            </button>
          </div>

          {/* Featured Recipe Section */}
          <div className="w-full py-6 px-4 bg-gray-100 text-center rounded-lg shadow-lg mb-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Featured Recipe</h1>
            <p className="text-lg text-gray-600">Discover our delicious recipes!</p>
          </div>
        </div>

        {/* Recipes Grid Section */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Delicious Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleRecipeClick(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{recipe.name}</h2>
                <p className="text-gray-600">{recipe.time}</p>
                <p className="text-gray-600">Category: {recipe.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          {showFilter ? "Hide Filter" : "Show Filter"}
        </button>
      </div>
    </View>
  );
};

export default Home;
