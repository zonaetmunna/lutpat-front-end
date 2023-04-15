import React from "react";
import ProductCard from "../../components/common/ProductCard";
import Banner from "../../components/page/home/Banner";
import { useGetProductsQuery } from "../../../features/product/productApi";

const Home = () => {
  // api data
  const { data, error, isError, isLoading } = useGetProductsQuery();

  return (
    <div className="container mx-auto my-4">
      <Banner />
      <h1 className="text-center text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
        {data &&
          data?.data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
