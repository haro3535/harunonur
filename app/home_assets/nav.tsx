'use client'

import React, { useState} from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 z-10 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <span>Harun Onur</span>
        </div>

        {/* Navigation Elements */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-800 hover:text-gray-600 transition duration-300">Home</a>
          <a href="/projects" className="text-gray-800 hover:text-gray-600 transition duration-300">Project</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 transition duration-300">About</a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            type='button'
            name='nav-button'
            title='title'
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-gray-600 transition duration-300 focus:outline-none"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-2`}>
        <a href="/" className="block py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Home</a>
        <a href="/projects" className="block py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Project</a>
        <a href="/about" className="block py-2 text-gray-800 hover:bg-gray-100 transition duration-300">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
