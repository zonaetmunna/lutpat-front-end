import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { removeFromWishlist } from "../../../../features/wishList/wishlistSlice";
import { IProduct } from "../../../../types";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishlistItems
  );
  const dispatch = useDispatch();

  const handleRemove = (productId: string) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product: IProduct) => (
            <div
              key={product._id}
              className="bg-white rounded-md shadow-md p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-medium mb-2">{product.name}</h2>
                <p className="text-gray-700 text-base mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">${product.price}</p>
                  <button
                    onClick={() => handleRemove(product._id ?? "")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishList;
