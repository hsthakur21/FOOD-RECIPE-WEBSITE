// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import UserRegister from "./components/user/UserRegister.js";
import UserLogin from "./components/user/UserLogin.js";
import Categories from "./components/category/Categories.js";
import CreateRecipe from "./components/category/CreateRecipe.js";
import { AuthProvider } from "./components/user/AuthContext.js";
import RecipesList from "./components/category/RecipesList.js";
import RecipeDetails from "./components/category/RecipeDetails.js";
import PrivateRoute from "./components/PrivateRoute"; // Importing PrivateRoute

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />

          {/* Protected Routes */}
          <Route
            path="/categories"
            element={<PrivateRoute element={<Categories />} />}
          />
          <Route
            path="/recipes/:categoryId"
            element={<PrivateRoute element={<RecipesList />} />}
          />
          <Route
            path="/recipe/:recipeId"
            element={<PrivateRoute element={<RecipeDetails />} />}
          />
          <Route
            path="/createrecipe"
            element={<PrivateRoute element={<CreateRecipe />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
