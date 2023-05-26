import React, { useMemo, useState } from "react";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "../../../../features/product/productApi";
import { Category, IProduct } from "../../../../types";
import Select from "react-select";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTimesCircle,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { ICategory } from "../../main/home/Home";
import { useGetCategoriesQuery } from "../../../../features/category/categoryApi";
import UpdateProduct from "../../../components/dashboard/product/UpdateProduct";
import DeleteProduct from "../../../components/dashboard/product/DeleteProduct";
import ViewProduct from "../../../components/dashboard/product/ViewProduct";
import { BsEye } from "react-icons/bs";

const AllProduct = () => {
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
        (product: IProduct) => product.category === selectedCategory.value
      );
    } else {
      return products || [];
    }
  }, [products, selectedCategory]);

  const { data: categoryData } = useGetCategoriesQuery({});
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

  /* handle update and delete */
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useRemoveProductMutation();

  const [slectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isSingleBrandModalOpen, setIsSingleBrandModalOpen] =
    useState<boolean>(false);
  const [isUpdateProductModalOpen, setIsUpdateProductModalOpen] =
    useState<boolean>(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
    useState<boolean>(false);

  const handleUpdateProduct = (product: IProduct) => {
    updateProduct(product);
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
  };

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product);
    setIsSingleBrandModalOpen(true);
  };

  const handleUpdateClick = (product: IProduct) => {
    setSelectedProduct(product);
    setIsUpdateProductModalOpen(true);
  };

  const handleDeleteClick = (product: IProduct) => {
    setSelectedProduct(product);
    setIsDeleteProductModalOpen(true);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative">
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-40"
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
            className="border border-gray-300 rounded-md py-2 px-3 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <table className="min-w-full divide-y divide-gray-200 mt-10 p-5">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              store
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {visibleProducts?.map((product: IProduct) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {product.description.slice(0, 3)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{product.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">${product.store}</div>
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleProductClick(product)}
                >
                  <BsEye />
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleUpdateClick(product)}
                >
                  <FaEdit />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteClick(product)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* paginition */}
      <nav className="flex justify-center" aria-label="Pagination">
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
              } ml-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
              <span className="sr-only">Previous page</span>
              <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
          <li>
            <span className="mx-3 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700">{`${currentPage} of ${totalPages}`}</span>
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
              <FaAngleDoubleRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
      {/* modal */}

      {/* {isSingleBrandModalOpen && (
        <ViewProduct
          onClose={() => setIsSingleBrandModalOpen(false)}
          brand={selectedBrand}
        />
      )} */}

      {slectedProduct && isUpdateProductModalOpen && (
        <UpdateProduct
          onClose={() => setIsUpdateProductModalOpen(false)}
          onUpdateProduct={handleUpdateProduct}
          product={slectedProduct}
        />
      )}
      {slectedProduct && isDeleteProductModalOpen && (
        <DeleteProduct
          onClose={() => setIsDeleteProductModalOpen(false)}
          onDeleteProduct={handleDeleteProduct}
          product={slectedProduct}
        />
      )}
    </div>
  );
};

export default AllProduct;
