"use client"
import React from 'react'
import {FiShoppingCart,FiSun,FiMoon} from "react-icons/fi";
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setdarkMode] = useState(false)
  return (
    <div className="bg-blue-950 text-white">
      <nav className="pt-2 flex items-center justify-center">
        <ul className="flex space-x-15">
          <li><a href="">Branding</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Login</a></li>
          <li><FiShoppingCart></FiShoppingCart></li>
          <button onClick={()=>setdarkMode(!darkMode)}>
              {darkMode?<FiMoon/>:<FiSun/>}
          </button>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar