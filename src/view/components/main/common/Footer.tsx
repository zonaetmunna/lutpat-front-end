import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">Company Name</h2>
            <p className="text-gray-400">1234 Street Address</p>
            <p className="text-gray-400">City, State ZIP Code</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@company.com</p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">Links</h2>
            <ul className="list-none">
              <li>
                <Link
                  to="about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="privacy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">
              Connect With Us
            </h2>
            <div className="flex">
              <Link
                to="#"
                className="mr-4 text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="#"
                className="mr-4 text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-gray-400 focus:outline-none focus:border-gray-500 transition duration-300"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
