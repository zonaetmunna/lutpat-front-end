import React from "react";
import useAPI from "../../../hooks/useApi";
import productService from "../../../services/product.service";
import Products from "../../components/common/Products";
import Banner from "../../components/page/home/Banner";

const Home = () => {
  // api data
  const { data: products } = useAPI<IProduct[]>(productService.getAllProducts);

  return (
    <div>
      <Banner />
      <div className="grid-cols-grid grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
        {products?.map((product) => (
          <Products product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
