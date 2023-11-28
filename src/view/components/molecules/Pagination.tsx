import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const Pagination = ({
  total,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    onPageSizeChange(newPageSize);
  };
  return (
    <div className="flex items-center justify-between my-8">
      <div className="text-gray-600">
        Showing{" "}
        <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span>{" "}
        to{" "}
        <span className="font-medium">
          {Math.min(currentPage * pageSize, total)}
        </span>{" "}
        of <span className="font-medium">{total}</span> results
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center mb-4">
          <span className="text-gray-700 mr-2">Results per page:</span>
          <select
            className="border border-gray-300 rounded-md py-2 px-4"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex justify-center items-center mx-y">
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center mr-2"
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
          <div className="flex items-center">
            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center mr-2 ${
                  pageNumber === currentPage ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center ml-2"
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
