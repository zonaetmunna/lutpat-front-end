import React, { ChangeEvent, useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../../../../features/product/productApi";
import { Store, StoreDataForm } from "../../../../types";
import {
  useAddStoreMutation,
  useDeleteStoreMutation,
  useGetStoreQuery,
  useUpdateStoreMutation,
} from "../../../../features/store/storeApi";
import SingleShop from "./SingleShop";
import AddStoreModal from "../../../components/dashboard/shop/AddStoreModal";
import UpdateModal from "../../../components/dashboard/shop/UpdateModal";
import DeleteModal from "../../../components/dashboard/shop/DeleteModal";
import Pagination from "../../../components/dashboard/common/Pagination";

// types give store information for server

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedBrand, setSelectedBrand] = useState<Store | null>(null);
  const [isAddBrandModalOpen, setIsAddBrandModalOpen] =
    useState<boolean>(false);
  const [isSingleBrandModalOpen, setIsSingleBrandModalOpen] =
    useState<boolean>(false);
  const [isUpdateBrandModalOpen, setIsUpdateBrandModalOpen] =
    useState<boolean>(false);
  const [isDeleteBrandModalOpen, setIsDeleteBrandModalOpen] =
    useState<boolean>(false);
  const total = 10;

  // get query
  const { data, isLoading } = useGetStoreQuery();
  console.log(data);
  const store = data?.data;
  // post query
  const [addStore] = useAddStoreMutation();
  // get single brand
  // const { data } = useGetSingleBrandQuery()
  // delete mutation
  const [deleteStore] = useDeleteStoreMutation();
  // update mutation
  const [updateStore] = useUpdateStoreMutation();

  // input
  const [displayData, setDisplayData] = useState<Store[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    const matchedResult = store?.filter((elem) =>
      elem.name.toLowerCase().includes(searchText)
    );
    setDisplayData(matchedResult || []);
  };

  const handleAddBrand = (store: StoreDataForm) => {
    addStore(store);
  };

  const handleUpdateBrand = (store: StoreDataForm) => {
    updateStore(store);
  };

  const handleDeleteBrand = (id: string) => {
    deleteStore(id);
  };

  const handleBrandClick = (store: Store) => {
    setSelectedBrand(store);
    setIsSingleBrandModalOpen(true);
  };

  const handleUpdateClick = (store: Store) => {
    setSelectedBrand(store);
    setIsUpdateBrandModalOpen(true);
  };

  const handleDeleteClick = (store: Store) => {
    setSelectedBrand(store);
    setIsDeleteBrandModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  // shop single
  // future update
  /* const handleShopClick = (shop) => {
    setCurrentShop(shop);
    setShowShopDetails(true);
  }; */

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shop List</h1>
      {/* input and button section */}
      <div className="flex justify-between items-center my-5">
        {/* input field */}
        <div className="relative flex items-center bg-white">
          <input
            type="text"
            placeholder="Search brands"
            className="py-2 pl-10 pr-4 block w-full rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none  focus:border-gray-500"
            onChange={(e) => handleSearch(e)}
          />
          <span className="absolute left-3 top-2">
            <FaSearch className="text-gray-600 w-5 h-5" />
          </span>
        </div>
        {/* add brand */}
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex items-center ">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsAddBrandModalOpen(true)}
          >
            Add Brand
          </button>
        </div>
      </div>

      {/* table */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayData?.map((brand) => (
                <tr key={brand._id}>
                  <td className="border px-4 py-2">{brand.name}</td>
                  <td className="border px-4 py-2">{brand.email}</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">{brand.location}</td>
                  <td className="border px-4 py-2">{brand.status}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleBrandClick(brand)}
                    >
                      View
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleUpdateClick(brand)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(brand)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* pagination */}
      <Pagination
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
      {/* view modal */}
      {/* future update */}
      {/* {isSingleBrandModalOpen && (
        <SingleShop
          onClose={() => setIsSingleBrandModalOpen(false)}
          brand={selectedBrand}
        />
      )} */}
      {/* add brand modal */}
      {isAddBrandModalOpen && (
        <AddStoreModal
          onClose={() => setIsAddBrandModalOpen(false)}
          onAddBrand={handleAddBrand}
        />
      )}
      {/* update and delete modal */}
      {selectedBrand && isUpdateBrandModalOpen && (
        <UpdateModal
          onClose={() => setIsUpdateBrandModalOpen(false)}
          onUpdateBrand={handleUpdateBrand}
          store={selectedBrand}
        />
      )}
      {selectedBrand && isDeleteBrandModalOpen && (
        <DeleteModal
          onClose={() => setIsDeleteBrandModalOpen(false)}
          onDeleteBrand={handleDeleteBrand}
          store={selectedBrand}
        />
      )}
    </div>
  );
};

export default ShopList;
