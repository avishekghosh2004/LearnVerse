import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-lg py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white">LearnVerse</h3>
            <p className="text-blue-100 text-sm">
              Empowering minds through education
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} LearnVerse. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className="text-blue-100 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-blue-100 hover:text-white transition-colors text-sm"
            >
              Contact
            </Link>
            <Link
              to="/terms"
              className="text-blue-100 hover:text-white transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-blue-100 hover:text-white transition-colors text-sm"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
