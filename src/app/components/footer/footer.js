import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Copyright */}
          <div className="text-sm">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
