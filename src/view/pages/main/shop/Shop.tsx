import React from "react";
import { useGetStoreQuery } from "../../../../features/store/storeApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Link } from "react-router-dom";

const Shop = () => {
  const { data, isError, isLoading, error } = useGetStoreQuery();
  const stores = data?.data;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    const fetchError = error as FetchBaseQueryError;
    return <div>Error: {fetchError.status}</div>;
  }

  return (
    <div className="container mx-auto bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Our Stores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores?.map((store) => (
          <div key={store._id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={store.image}
              alt={store.name}
              className="h-32 w-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{store.location}</p>
            <Link
              to={`/shop/${store._id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Visit Store
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
