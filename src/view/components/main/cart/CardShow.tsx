import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../types";

const CardShow = ({
  isOpen,
  cart,
  ref,
  onClose,
}: {
  isOpen: boolean;
  cart: IProduct[];
  ref: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) => {
  return (
    <div
      ref={ref}
      className={`card-show-container ${isOpen ? "block" : "hidden"}`}
    >
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="card-show-title text-lg font-semibold mb-2">
          Card Details
        </h3>
        <div className="card-show-content">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                className="card-item flex justify-between items-center"
                key={index}
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))
          ) : (
            <p>Your card is empty.</p>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <Link
            to="/cart"
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-sm font-medium"
          >
            View Cart
          </Link>
          <Link
            to="/checkout"
            className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-sm font-medium"
          >
            Checkout
          </Link>
        </div>
        <button
          onClick={onClose}
          className="close-button absolute top-2 right-2 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardShow;
