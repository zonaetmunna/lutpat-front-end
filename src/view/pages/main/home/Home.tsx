import React, { useEffect, useState, useMemo } from "react";
import Banner from "../../../components/main/home/Banner";
import ProductCard from "../../../components/common/ProductCard";
import { useGetProductsQuery } from "../../../../features/product/productApi";
import Slider from "../../../components/main/home/Slider";
import FilterSidebar from "../../../components/common/FilterSidebar";
import { Category, IProduct } from "../../../../types";
import DeleveryOption from "../../../components/main/home/DeleveryOption";
import { useGetCategoryQuery } from "../../../../features/category/categoryApi";
import Select from "react-select";

interface ICategory {
  label: string;
  value: string;
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  // api data
  const { data, error, isError, isLoading } = useGetProductsQuery({
    category: selectedCategory?.value,
  });
  const products = data?.data;
  // Filter products by selected category
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products && selectedCategory) {
      const filtered = products.filter(
        (product) => product.category.name === selectedCategory.value
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products || []);
    }
  }, [products, selectedCategory]);

  const { data: datas } = useGetCategoryQuery();
  const categories = datas?.data;
  console.log(categories);
  const categoryOptions = categories?.map((category: Category) => ({
    label: category.name,
    value: category.name!,
  }));

  const handleCategoryChange = (selected: ICategory | null) => {
    setSelectedCategory(selected);
  };

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
            {/* <FilterSidebar /> */}
            <Select
              options={categoryOptions}
              value={selectedCategory}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
              {filteredProducts?.map((product) => (
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
