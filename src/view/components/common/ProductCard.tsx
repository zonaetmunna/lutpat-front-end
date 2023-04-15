import React from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../types";
import { addToCart } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }: { product: IProduct }) => {
  // product destructuring
  console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProductCart = (product: IProduct) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => handleAddProductCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate(`/product/${product._id}`)}
          className="ml-4 text-gray-700 hover:text-blue-500 font-bold py-2 px-4"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
