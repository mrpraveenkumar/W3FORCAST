import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">WeatherAI</h3>
            <p className="text-gray-300">Bringing the future of weather forecasting to your fingertips.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/" className="hover:text-blue-500 transition-colors" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 animate-bounce" />
            </a>
            <a href="https://instagram.com/" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 animate-bounce" />
            </a>
            <a href="https://github.com/" className="hover:text-blue-500 transition-colors" aria-label="GitHub">
              <FaGithub className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} WeatherAI. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built With Love By
            <a
              href="#"
              className="text-cyan-400 animate-pulse"
            > Praveen Kumar
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
