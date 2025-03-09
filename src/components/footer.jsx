import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Logo & Description */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">MarketPlace</h2>
            <p className="text-sm text-gray-400 mt-2">
              Buy & sell products easily with secure transactions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <a href="/market" className="hover:text-blue-400">Market</a>
            <a href="/seller" className="hover:text-blue-400">Seller Center</a>
            <a href="/buyer" className="hover:text-blue-400">Buyer Center</a>
            <a href="/contact" className="hover:text-blue-400">Contact Us</a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-gray-400"><FaGithub size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} MarketPlace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
