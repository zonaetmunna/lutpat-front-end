import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../features/product/productApi";
import { useDispatch } from "react-redux";
import { IProduct } from "../../../../types";
import { addItem } from "../../../../features/cart/cartSlice";
import { addToWishlist } from "../../../../features/wishList/wishlistSlice";
import { BiHeart, BiShoppingBag } from "react-icons/bi";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  const [quantity, setQuantity] = useState(1);

  const { data, isSuccess, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;

  const handleAddToCart = (data: IProduct) => {
    dispatch(addItem({ ...data, quantity }));
  };

  const handleAddToWishlist = (product: IProduct) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center space-y-8 lg:space-y-0 bg-gray-100">
      <div className="lg:w-1/2 lg:mx-4">
        <img src={product?.image} alt={product?.name} className="w-full" />
      </div>
      <div className="p-4 bg-gray-50">
        <h2 className="text-lg font-semibold">{product?.name}</h2>
        <p className="text-gray-600">${product?.price}</p>
        <p className="mt-2 text-sm text-gray-500">{product?.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-20 px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={quantity}
              min={1}
              max={10}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => product && handleAddToCart(product)}
            >
              <BiShoppingBag className="-ml-1 mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => product && handleAddToWishlist(product)}
            >
              <BiHeart className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
