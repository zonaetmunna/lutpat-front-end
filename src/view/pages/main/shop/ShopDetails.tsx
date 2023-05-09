import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleStoreQuery } from "../../../../features/store/storeApi";
import { useGetProductsQuery } from "../../../../features/product/productApi";
import ProductCard from "../../../components/common/ProductCard";

const ShopDetails = () => {
  const { id = "" } = useParams();
  const {
    data,
    isLoading: shopLoading,
    isError: shopError,
  } = useGetSingleStoreQuery(id);
  const store = data?.data;

  const [categoryFilter, setCategoryFilter] = useState("");
  const {
    data: datas,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsQuery();

  const products = datas?.data;

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
      <div>
        <label htmlFor="category-select">Filter by category:</label>
        <select
          id="category-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-white hidden sm:block overflow-y-auto">
          <div className="p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium mb-4">Shop Information</h2>
            <div>
              <p className="text-gray-600 font-medium">Name:</p>
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
