// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../client/src/components/pages/Home.js";
import About from "../../client/src/components/pages/About.js";
import Contact from "../../client/src/components/pages/Contact.js";
import UserRegister from "../../client/src/components/user/UserRegister.js";
import UserLogin from "../../client/src/components/user/UserLogin.js";
import Categories from "../../client/src/components/category/Categories.js";
import CreateRecipe from "../../client/src/components/category/CreateRecipe.js";
import { AuthProvider } from "../../client/src/components/user/AuthContext.js";
import RecipesList from "../../client/src/components/category/RecipesList.js";
import RecipeDetails from "../../client/src/components/category/RecipeDetails.js";
import PrivateRoute from "../../client/src/components/PrivateRoute.js"; // Importing PrivateRoute

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
