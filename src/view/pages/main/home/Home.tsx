import React, { useEffect, useState, useMemo } from "react";
import Banner from "../../../components/main/home/Banner";
import ProductCard from "../../../components/common/ProductCard";
import { useGetProductsQuery } from "../../../../features/product/productApi";
import Slider from "../../../components/main/home/Slider";
import FilterSidebar from "../../../components/common/FilterSidebar";
import { IProduct } from "../../../../types";
import DeleveryOption from "../../../components/main/home/DeleveryOption";

interface IFilter {
  category: string;
  priceRange: { min: number; max: number };
}

const Home = () => {
  // api data
  const { data, error, isError, isLoading } = useGetProductsQuery();
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    category: "",
    priceRange: { min: 0, max: 100 },
  });

  const handleFilterChange = (newFilter: IFilter) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  const filteredProducts = useMemo(() => {
    if (!data?.data) return [];
    return data.data.filter((product) => {
      const categoryMatch =
        filter.category === "" || product.category === filter.category;
      const priceMatch =
        product.price >= filter.priceRange.min &&
        product.price <= filter.priceRange.max;
      return categoryMatch && priceMatch;
    });
  }, [data, filter]);

  const combinedData = useMemo(() => {
    if (!data?.data) return [];
    if (!filteredProducts.length) return data.data;
    const filteredIds = new Set(filteredProducts.map((product) => product._id));
    return data.data
      .filter((product) => !filteredIds.has(product._id))
      .concat(filteredProducts);
  }, [data, filteredProducts]);

  // filter products based on category and price range
  /* const filteredProducts = data?.data?.filter((product) => {
    const categoryMatch =
      filter.category === "" || product.category === filter.category;
    const priceMatch =
      product.price >= filter.priceRange.min &&
      product.price <= filter.priceRange.max;
    return categoryMatch && priceMatch;
  }); */

  return (
    <div className="container mx-auto bg-gray-100">
      <div className="p-10">
        <Slider products={data?.data} />
      </div>

      <div className="my-10">
        <DeleveryOption />
      </div>

      <div className="bg-gray-100 mt-10">
        <h1 className="text-center text-3xl font-bold mb-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-5 gap-4  ">
          <div className="col-span-1 ">
            <FilterSidebar
              filter={filter}
              products={combinedData}
              // onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
              {combinedData.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
