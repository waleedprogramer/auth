'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-black">K|Weather</div>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/dashboard" className="text-white hover:text-blue-300 transition-all ease-in-out">Dashboard</Link>
          <Link href="/about" className="text-white hover:text-blue-300 transition-all ease-in-out">About</Link>
          <Link href="/login" className="text-white hover:text-blue-300 transition-all ease-in-out">Login</Link>
          
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-600 p-4`}>
        <Link href="/dashboard" className="block text-white p-2 hover:bg-blue-500 rounded-full">Dashboard</Link>
        <Link href="/about" className="block text-white p-2 hover:bg-blue-500 rounded-full">About</Link>
        <Link href="/login" className="block text-white p-2 hover:bg-blue-500 rounded-full">Login</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
