import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingBag,
  FiLogOut,
  FiChevronRight,
  FiChevronLeft,
  FiDollarSign,
} from "react-icons/fi";
import {
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaFilePdf,
  FaList,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { BiMessageSquare, BiStore } from "react-icons/bi";
import { AiOutlinePause } from "react-icons/ai";
import {
  MdPeople,
  MdPerson,
  MdDashboard,
  MdRestaurantMenu,
} from "react-icons/md";
import { logOut } from "../../../../features/auth/authSlice";
import { RootState } from "../../../../app/store";

const SellerDashboardSidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();

  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isVendorOpen, setIsVendorOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductOpen(!isProductOpen);
  };

  const toggleCustomerMenu = () => {
    setIsCustomerOpen(!isCustomerOpen);
  };

  const toggleOrderMenu = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  // logout
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div
      className={`${
        isCollapsed ? " " : "w-56"
      } h-screen p-5 shadow-md bg-gray-300 text-dark flex flex-col transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center h-16">
        <div className="text-2xl font-semibold">Logo</div>
      </div>

      {/* {!user.email === "merchant" && ( */}
      <nav className="flex flex-col py-4 ">
        {/* dashboard */}
        <button
          onClick={() => navigate("/seller-dashboard")}
          className="flex items-center py-2 px-4  hover:bg-gray-700 hover:text-white rounded-md"
        >
          <span className="mr-2">
            <MdDashboard className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Dashboard</span>
        </button>
        {/* shop */}
        <button
          onClick={() => navigate("seller-shop-list")}
          className="flex items-center py-2 px-4  hover:bg-gray-700 hover:text-white rounded-md"
        >
          <span className="mr-2">
            <BiStore className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>My Shop-List</span>
        </button>
        {/* products */}
        <button
          className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-white rounded-md  transition-colors duration-200"
          onClick={toggleProductMenu}
        >
          <span className="mr-2">
            <FaList className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Products</span>
          {isProductOpen ? (
            <FaChevronUp className={`ml-auto ${isCollapsed ? "hidden" : ""}`} />
          ) : (
            <FaChevronDown
              className={`ml-auto ${isCollapsed ? "hidden" : ""}`}
            />
          )}
        </button>
        <div className={`ml-4 ${isProductOpen ? "" : "hidden"}`}>
          <Link
            to="product-list"
            className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
          >
            <span className="mr-2">
              <FaList className="mr-4" />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>
              Product List
            </span>
          </Link>
          <Link
            to="product-add"
            className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <span className="mr-2">
              <FaPlus className="mr-4" />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>
              Add Product
            </span>
          </Link>
        </div>
        {/* category */}
        <button
          onClick={() => navigate("category-list")}
          className="flex items-center py-2 px-4 hover:text-white hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <MdRestaurantMenu className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>
            Category-List
          </span>
        </button>
        {/* customer */}
        <button
          className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-white rounded-md"
          onClick={toggleCustomerMenu}
        >
          <span className="mr-2">
            <FaUser className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Customer</span>
          {isVendorOpen ? (
            <FaChevronUp className={`ml-auto ${isCollapsed ? "hidden" : ""}`} />
          ) : (
            <FaChevronDown
              className={`ml-auto ${isCollapsed ? "hidden" : ""}`}
            />
          )}
        </button>
        <div className={`ml-4 ${isCustomerOpen ? "" : "hidden"}`}>
          <Link
            to="customer-list"
            className="flex items-center py-2 px-4 hover:text-white text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="mr-2">
              <FaUser className="mr-4" />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>
              Customer List
            </span>
          </Link>
          <Link
            to="vendor/:id"
            className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="mr-2">
              <FaUser className="mr-4" />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>
              Customer Profile
            </span>
          </Link>
        </div>

        {/* orders */}
        <button
          className="flex items-center py-2 px-4 hover:text-white hover:bg-gray-700 rounded-md"
          onClick={toggleOrderMenu}
        >
          <span className="mr-2">
            <FiShoppingBag className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Orders</span>
          {isOrderOpen ? (
            <FaChevronUp className={`ml-auto ${isCollapsed ? "hidden" : ""}`} />
          ) : (
            <FaChevronDown
              className={`ml-auto ${isCollapsed ? "hidden" : ""}`}
            />
          )}
        </button>
        <div className={`ml-4 ${isOrderOpen ? "" : "hidden"}`}>
          <Link
            to="order-list"
            className="flex items-center py-2 px-4 hover:text-white text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="mr-2">
              <FiShoppingBag />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>Order List</span>
          </Link>
          <Link
            to="/order/:id"
            className="flex items-center py-2 hover:text-white px-4 text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="mr-2">
              <FiShoppingBag />
            </span>
            <span className={`${isCollapsed ? "hidden" : ""}`}>
              Order Details
            </span>
          </Link>
        </div>

        {/* refunds */}
        <button
          onClick={() => navigate("seller-refunds")}
          className="flex items-center py-2 px-4 hover:text-white  hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <RiRefund2Line className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Refunds</span>
        </button>
        {/* shippings */}
        <button
          onClick={() => navigate("shippings")}
          className="flex items-center py-2 px-4 hover:text-white hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <AiOutlinePause className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>shippings</span>
        </button>
        {/* Withdrawals */}
        <button
          onClick={() => navigate("withdrawals")}
          className="flex items-center py-2 px-4 hover:text-white  hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <FiDollarSign className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Withdrawals</span>
        </button>

        {/* invoice */}
        <button
          onClick={() => navigate("invoice")}
          className="flex items-center py-2 px-4 hover:text-white  hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <FaFilePdf className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Invoice</span>
        </button>
        {/* setting */}
        <button
          onClick={() => navigate("settings")}
          className="flex items-center py-2 px-4 hover:text-white hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <FaCog className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Settings</span>
        </button>
        {/* messages */}
        <button
          onClick={() => navigate("message")}
          className="flex items-center py-2 px-4 hover:text-white hover:bg-gray-700 rounded-md"
        >
          <span className="mr-2">
            <BiMessageSquare className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Message</span>
        </button>
      </nav>
      {/* )} */}
      {/* logout */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleLogOut}
          className="flex items-center py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
        >
          <span className="mr-2">
            <FiLogOut className="mr-4" />
          </span>
          <span className={`${isCollapsed ? "hidden" : ""}`}>Logout</span>
        </button>
      </div>
      <div
        className="absolute bottom-0 mb-6 mx-auto cursor-pointer"
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <FiChevronRight className="text-gray-500 text-2xl" />
        ) : (
          <FiChevronLeft className="text-gray-500 text-2xl" />
        )}
      </div>
    </div>
  );
};

export default SellerDashboardSidebar;
