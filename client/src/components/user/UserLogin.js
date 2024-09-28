import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import View from "../dishplay/View";
import { AuthContext } from "./AuthContext";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (response.status === 200) {
        toast.success("Login successful! Redirecting to recipes...");
        
        login(response.data.user);

        setTimeout(() => {
          navigate("/categories");
        }, 1000); 
      }
    } catch (error) {
      
      if (error.response) {
        toast.error(error.response.data.message || "Login failed. Please check your credentials and try again.");
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  return (
    <View>
      <ToastContainer />
      <div className="bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] min-h-screen flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-gray-600 text-center">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </View>
  );
};

export default UserLogin;
