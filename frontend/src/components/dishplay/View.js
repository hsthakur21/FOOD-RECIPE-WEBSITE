// src/View.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const View = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] min-h-[80vh] pt-[10vh] pb-[20vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default View;
