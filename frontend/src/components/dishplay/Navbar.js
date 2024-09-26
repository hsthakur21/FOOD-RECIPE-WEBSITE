import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../user/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold cursor-pointer transition-transform duration-300 transform hover:scale-105">FoodieHub</h1>
        <button
          className="md:hidden text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className="hidden md:flex md:flex-row md:space-x-8 font-bold">
          {!user ? (
            <>
              <li>
                <Link to="/" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">About</Link>
              </li>
              <li>
                <Link to="/categories" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">Categories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">Contact</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/about" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">About</Link>
              </li>
              <li>
                <Link to="/categories" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">Categories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:bg-blue-600 px-4 py-3 rounded transition duration-300 text-xl border-b-4 border-blue-300 hover:border-blue-500">Contact</Link>
              </li>
            </>
          )}
          {!user ? (
            <>
              <li>
                <Link to="/signup" className="text-blue-600 bg-white text-lg px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md border-2 border-blue-400">Signup</Link>
              </li>
              <li>
                <Link to="/login" className="text-blue-600 bg-white text-lg px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md border-2 border-blue-400">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li className="relative">
                <button
                  onClick={toggleProfile}
                  className="text-white bg-gradient-to-r from-blue-400 to-blue-600 text-lg px-4 py-2 rounded hover:bg-blue-500 transition duration-300 shadow-lg flex items-center border-2 border-blue-400">
                  Profile
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md text-center">
                      <button className="w-full text-blue-600 text-sm px-3 py-2 rounded hover:bg-blue-200 transition duration-300">
                        My Profile
                      </button>
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-blue-600 text-sm px-3 py-2 rounded hover:bg-blue-200 transition duration-300 text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-full h-full bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden pt-16`}>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-blue-600 text-4xl font-bold">FoodieHub</h1>
          <button onClick={toggleMenu}>
            <FaTimes size={24} className="text-blue-600" />
          </button>
        </div>
        <ul className="flex flex-col space-y-10 align-middle mt-4 px-4 hover:bg-slate-600">
          {!user ? (
            <>
              <li>
                <Link to="/" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">About</Link>
              </li>
              <li>
                <Link to="/categories" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">Categories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">Contact</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/about" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">About</Link>
              </li>
              <li>
                <Link to="/categories" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">Categories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-600 text-xl hover:bg-gray-200 py-3 rounded transition duration-300 border-b-4 border-blue-300 hover:border-blue-500 transform hover:scale-105">Contact</Link>
              </li>
            </>
          )}
          {!user ? (
            <>
              <li>
                <Link to="/signup" className="text-blue-600 bg-white text-xl px-4 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md border-2 border-blue-400">Signup</Link>
              </li>
              <li>
                <Link to="/login" className="text-blue-600 bg-white text-xl px-4 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md border-2 border-blue-400">Login</Link>
              </li>
            </>
          ) : (
            <>
              {/* Profile Menu */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
