import React, { ChangeEvent, useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteModal from "../../../components/dashboard/shop/DeleteModal";
import UpdateModal from "../../../components/dashboard/shop/UpdateModal";
import { Link } from "react-router-dom";
import SingleShop from "./SingleShop";

const shopList = [
  {
    id: 1,
    name: "Shop 1",
    location: "Location 1",
    category: "va",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
  {
    id: 2,
    name: "Shop 2",
    location: "Location 2",
    category: "dal",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
  {
    id: 3,
    name: "Shop 3",
    location: "Location 3",
    category: "cloth",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
  {
    id: 4,
    name: "Shop 4",
    location: "Location 4",
    category: "beauti",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
  {
    id: 5,
    name: "Shop 5",
    location: "Location 5",
    category: "electtronics",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
  {
    id: 6,
    name: "Shop 6",
    location: "Location 6",
    category: "leptop",
    status: "Open",
    update: <FiEdit />,
    delete: <FiTrash2 />,
  },
];

interface Shop {
  id: number;
  name: string;
  address: string;
  location: string;
  category: string;
  status: string;
}

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [currentShop, setCurrentShop] = useState<Shop | null>(null);
  const [showShopDetails, setShowShopDetails] = useState(false);

  // Calculate total number of pages
  const totalPages = Math.ceil(shopList.length / pageSize);

  // Calculate index of last shop on current page
  const indexOfLastShop = currentPage * pageSize;

  // Calculate index of first shop on current page
  const indexOfFirstShop = indexOfLastShop - pageSize;

  // Get shops on current page
  const currentShops = shopList.slice(indexOfFirstShop, indexOfLastShop);

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Delete a shop from the list
  const handleUpdateClick = (shop: Shop) => {
    setCurrentShop(shop);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (shop: Shop) => {
    setCurrentShop(shop);
    setDeleteModalOpen(true);
  };

  const handleUpdateSubmit = (updatedShop: Shop) => {
    // Code to update shop in list
    setUpdateModalOpen(false);
  };

  const handleDeleteSubmit = () => {
    // Code to delete shop from list
    setDeleteModalOpen(false);
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
      <div className="mb-4">
        <label htmlFor="pageSize">Page size:</label>
        <select
          id="pageSize"
          className="ml-2 border border-gray-300 rounded p-1"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">
              Name{" "}
              <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" />
            </th>
            <th className="px-4 py-2">
              Location{" "}
              <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" />
            </th>
            <th className="px-4 py-2">
              Category{" "}
              <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" />
            </th>
            <th className="px-4 py-2">
              Status{" "}
              <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" />
            </th>
            <th className="px-4 py-2">
              Action{" "}
              <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" />
            </th>
            <th className="px-4 py-2">
              Details{" "}
              {/* <FaSort className="inline-block ml-1 text-gray-400 cursor-pointer hover:text-gray-600" /> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentShops.map((shop, index) => (
            <tr
              key={shop.id}
              //   onClick={() => handleShopClick(shop)}
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{shop.name}</td>
              <td className="border px-4 py-2">{shop.location}</td>
              <td className="border px-4 py-2">{shop.category}</td>
              <td className="border px-4 py-2">{shop.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-blue-600 hover:text-blue-900 mr-4"
                  //   onClick={() => handleUpdateClick(shop)}
                >
                  {shop.update}
                </button>
                <button
                  className="text-blue-600 hover:text-blue-900 mr-4"
                  //   onClick={() => handleDeleteClick(shop)}
                >
                  {shop.delete}
                </button>
              </td>
              <td>
                <Link to={`/shops/${shop.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  */}
      <div className="my-4">
        <p className="text-sm text-gray-600">
          Showing {indexOfFirstShop + 1} to {indexOfLastShop} of{" "}
          {shopList.length} shops
        </p>
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`border border-gray-300 rounded px-2 py-1 ${
                    pageNumber === currentPage
                      ? "bg-gray-300 text-gray-800"
                      : "text-gray-500 hover:bg-gray-200"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      {/* future work */}
      {/*  {updateModalOpen && (
        <UpdateModal
          shop={currentShop}
          onSubmit={handleUpdateSubmit}
          onClose={() => setUpdateModalOpen(false)}
        />
      )}

      {deleteModalOpen && (
        <DeleteModal
          shop={currentShop}
          onSubmit={handleDeleteSubmit}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}
      {showShopDetails && <SingleShop shop={currentShop} />} */}
    </div>
  );
};

export default ShopList;
