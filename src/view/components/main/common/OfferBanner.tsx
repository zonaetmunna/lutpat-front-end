import React from "react";
import { Link } from "react-router-dom";
import offerImage from "../../../../assets/images/offer-image.jpg";

const OfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-150 rounded-lg shadow-lg my-10 p-10">
      <div className="container mx-auto py-8 px-4 md:py-12 md:px-8 lg:flex lg:justify-between lg:items-center">
        <div className="text-dark">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
            Limited Time Offer!
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Get 20% off on all products. Shop now!
          </p>
          <Link
            to="#"
            className="bg-white text-purple-500 hover:text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-lg uppercase tracking-wide transition-all duration-300 ease-in-out inline-block"
          >
            Shop Now
          </Link>
        </div>
        <img
          src={offerImage}
          alt="Offer"
          className="w-full max-w-md mx-auto mt-8 md:mt-0 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default OfferBanner;
