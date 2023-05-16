import React, { useState, useMemo } from "react";
import ProductCard from "../../../components/common/ProductCard";
import { useGetProductsQuery } from "../../../../features/product/productApi";
import Slider from "../../../components/main/home/Slider";
import { Category, IProduct } from "../../../../types";
import DeleveryOption from "../../../components/main/home/DeleveryOption";
import { useGetCategoryQuery } from "../../../../features/category/categoryApi";
import Select from "react-select";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
  FaTimesCircle,
} from "react-icons/fa";

export interface ICategory {
  label: string;
  value: string;
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // api data
  const { data, error, isError, isLoading } = useGetProductsQuery({
    category: selectedCategory?.value,

    search: searchText,
    page: currentPage,
    limit: itemsPerPage,
  });

  const products = data?.data;

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (products && selectedCategory) {
      return products.filter(
        (product) => product.category === selectedCategory.value
      );
    } else {
      return products || [];
    }
  }, [products, selectedCategory]);

  const { data: categoryData } = useGetCategoryQuery();
  const categories = categoryData?.data;
  console.log(categories);

  const categoryOptions = categories?.map((category: Category) => ({
    label: category.name,
    value: category.name,
  }));

  const handleCategoryChange = (selected: ICategory | null) => {
    setSelectedCategory(selected);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredProducts?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);

  return (
    <div className="container mx-auto bg-gray-100">
      <div className="p-10">
        <Slider />
      </div>

      <div className="my-10">
        <DeleveryOption />
      </div>

      <div className="bg-gray-100 mt-10">
        <h1 className="text-center text-4xl font-bold mb-6">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* sidebar */}
          <div className="space-y-4">
            <div className="relative">
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-40 px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute right-0 top-0 h-full flex items-center pr-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimesCircle className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText("")}
                  className="absolute right-0 top-0 h-full flex items-center pr-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimesCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* products */}
          <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {isLoading ? (
                <p>Loading...</p>
              ) : isError ? (
                <p>Error</p>
              ) : (
                visibleProducts?.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))
              )}
            </div>
            {/* Pagination */}
            <nav className="flex justify-center mt-10" aria-label="Pagination">
              <ul className="inline-flex">
                <li>
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className={`${
                      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    } py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                  >
                    <span className="sr-only">First page</span>
                    <FaAngleDoubleLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`${
                      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    } ml-                3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                  >
                    <span className="sr-only">Previous page</span>
                    <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                </li>
                <li>
                  <span className="mx-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    {`${currentPage} of ${totalPages}`}
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    } mr-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                  >
                    <span className="sr-only">Next page</span>
                    <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className={`${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    } py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                  >
                    <span className="sr-only">Last page</span>
                    <FaAngleDoubleRight
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
