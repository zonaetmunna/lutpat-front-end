import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleStoreQuery } from "../../../../features/store/storeApi";
import {
  useGetProductsByShopQuery,
  useGetProductsQuery,
} from "../../../../features/product/productApi";
import ProductCard from "../../../components/main/common/ProductCard";

const ShopDetails = () => {
  const { id = "" } = useParams();
  const {
    data,
    isLoading: shopLoading,
    isError: shopError,
  } = useGetSingleStoreQuery(id);
  const store = data?.data;
  console.log(store);

  const {
    data: datas,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsByShopQuery(id);
  const products = datas?.data;
  console.log(products);

  const [categoryFilter, setCategoryFilter] = useState("");
  /*  const {
    data: datas,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsQuery(); */

  // const products = datas?.data;

  useEffect(() => {
    // Reset the category filter when the shop ID changes
    setCategoryFilter("");
  }, [id]);

  if (shopLoading || productLoading) {
    return <div>Loading...</div>;
  }
  if (shopError) {
    return <div>Error loading shop.</div>;
  }

  if (productError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div className="container mx-auto bg-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-white hidden sm:block overflow-y-auto">
          <div className="p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium mb-4">Shop Information</h2>
            <div className="flex items-center mb-4">
              <img src={store?.image} alt="Logo" className="h-12 w-12 mr-2" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">{store?.name ?? ""}</p>
            </div>

            <div>
              <p className="text-gray-600 font-medium">Phone:</p>
              {/* <p className="text-gray-900 font-medium">{store.phone}</p> */}
            </div>
            <div>
              <p className="text-gray-600 font-medium">Email:</p>
              {/* <p className="text-gray-900 font-medium">{store.email}</p> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-full overflow-y-auto">
          <div className="p-4 bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div>No products found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
