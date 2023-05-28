import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container bg-cover bg-center h-96 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Welcome to Our Store
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore our wide range of products and enjoy exclusive discounts.
        </p>
        <Link
          to="/shop"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
