"use client";
import React, { useState } from "react";
import { FiShoppingCart, FiSun, FiMoon, FiMenu } from "react-icons/fi";
import Link from "next/link";

const Navbar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-blue-950 text-white h-16 flex items-center px-6 justify-between w-full">
      <button className="md:hidden" onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
      
      <Link href="#" className="text-xl font-bold whitespace-nowrap flex-1 md:flex-none text-center md:text-left">Branding</Link>
      
      <ul className="hidden md:flex items-center gap-x-6 flex-1 justify-end flex-wrap">
        <li><Link href="#" className="whitespace-nowrap">Home</Link></li>
        <li><Link href="#" className="whitespace-nowrap">About</Link></li>
        <li><Link href="#" className="whitespace-nowrap">Contact Us</Link></li>
        <li><Link href="#" className="whitespace-nowrap">Login</Link></li>
        <li><FiShoppingCart className="cursor-pointer" /></li>
        <button onClick={() => setDarkMode(!darkMode)} className="whitespace-nowrap">
          {darkMode ? <FiMoon />: <FiSun />}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;