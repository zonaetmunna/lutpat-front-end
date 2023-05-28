import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "../../../../features/product/productApi";
import { useDispatch } from "react-redux";
import { IProduct } from "../../../../types";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { addToCart } from "../../../../features/cart/cartSlice";
import { addToWishlist } from "../../../../features/wishList/wishlistSlice";
import ProductCard from "../../../components/main/common/ProductCard";
import { toast } from "react-hot-toast";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  const [quantity, setQuantity] = useState(1);

  const { data, isSuccess, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;

  const handleAddToCart = (data: IProduct) => {
    dispatch(addToCart({ ...data, quantity }));
    toast.success("Product added to cart", {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleAddToWishlist = (product: IProduct) => {
    dispatch(addToWishlist(product));
    toast.success("Product added to wishlist", {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const { data: datas, isError } = useGetProductsQuery({});
  const products = datas?.data;

  return (
    <div className="space-y-8 lg:space-y-0 bg-gray-100 p-5">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center border-b border-red-100 p-5">
        {/* image */}

        <div className="lg:w-1/3 lg:mx-4">
          <img src={product?.image} alt={product?.name} className="w-full" />
          <div>{/* others image */}</div>
        </div>
        {/* details */}
        <div className="p-4 w-full lg:w-2/3 flex justify-center items-center">
          <div>
            <h2 className="text-lg font-semibold">{product?.name}</h2>
            <p className="text-gray-600">${product?.price}</p>
            <p className="mt-2 text-sm text-gray-500">{product?.description}</p>
            <p className="mt-2 text-sm text-gray-500">{product?.category}</p>
            <p className="mt-2 text-sm text-gray-500">{product?.store}</p>
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

          <div>{/* category */}</div>
        </div>
      </div>
      <div className="bg-gray-100 mt-10">
        <p className="text-xl font-bold mt-10 mb-2">Details</p>
        <p className="text-gray-700">{product?.description}</p>
      </div>
      <div className="">
        <p className="text-xl font-bold mt-10 mb-4">Related Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : isError ? (
            <p className="text-red-500">Error</p>
          ) : (
            products?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
