import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">LearnVerse</h3>
            <p className="text-gray-400">Empowering minds through education</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LearnVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
