import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="bg-gray-800 text-white py-2 shadow-lg mt-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-md font-bold mb-1">Contact Us</h2>
          <p className="text-sm">
            Email: 
            <a 
              href="mailto:himanshussthakur2002@gmail.com" 
              className="underline hover:text-yellow-400 transition duration-300"
            >
              himanshussthakur2002@gmail.com
            </a>
          </p>
          <p className="text-sm">Phone: 
            <a 
              href="tel:+919548868770" 
              className="underline hover:text-yellow-400 transition duration-300"
            >
              +91 95488 68770
            </a>
          </p>
          
          <h2 className="text-md font-bold mt-2 mb-1">Follow Us</h2>
          <div className="flex justify-center space-x-4 mt-1">
            <a
              href="https://www.instagram.com/mr__thakurshab?igsh=NzNiNXRld3p6Zjlp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-125"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-thakur-8754a418a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-125"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/hsthakur21" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-125"
            >
              <FaGithub size={20} />
            </a>
          </div>
          
          <p className="text-gray-400 text-xs mt-2">© 2024 Himanshu Thakur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
