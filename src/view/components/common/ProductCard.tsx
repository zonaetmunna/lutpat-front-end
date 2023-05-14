import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../types";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../features/wishList/wishlistSlice";
import { addItem } from "../../../features/cart/cartSlice";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const ProductCard = ({ product }: { product: IProduct }) => {
  // product destructuring
  console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddProductCart = (product: IProduct) => {
    console.log(product);
    dispatch(addItem({ ...product, quantity }));
  };
  const handleAddToWishlist = (product: IProduct) => {
    console.log(product);
    dispatch(addToWishlist(product));
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md">
      <img
        className="w-full h-48 object-contain"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="mt-2 text-sm text-gray-500">
            {product.description.slice(0, 5)}
          </p>
          <p className="mt-2 text-sm text-gray-500">{product.store}</p>
          <p className="mt-2 text-sm text-gray-500">{product.category.name}</p>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            type="button"
            className="p-1 border border-gray-300 rounded-l-md focus:outline-none"
            onClick={handleDecrement}
          >
            <RiArrowDropDownLine />
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-16 text-center bg-blue-100 px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={quantity}
            min={1}
            max={10}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            type="button"
            className="p-1 border border-gray-300 rounded-r-md focus:outline-none"
            onClick={handleIncrement}
          >
            <RiArrowDropUpLine />
          </button>
        </div>

        <div className="flex justify-around items-center mt-4">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => handleAddProductCart(product)}
          >
            <BiShoppingBag className="ml-1 mr-2 h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => handleAddToWishlist(product)}
          >
            <BiHeart className="ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          </button>
          <Link
            to={`/product/${product._id}`}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <BsEye className="ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
