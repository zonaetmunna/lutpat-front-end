import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../../../features/auth/authSlice";
import { AiOutlineUser, AiOutlineKey, AiOutlineShopping } from "react-icons/ai";
import {
  RiDownload2Line,
  RiHeartLine,
  RiQuestionLine,
  RiRefund2Line,
  RiFileList2Line,
  RiSdCardLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

const UserProfileSidebar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div className="relative h-screen space-y-4 bg-gray-200  shadow-lg  w-64 p-5 rounded-lg hover:bg-amber-200">
      <div className="overflow-y-auto h-full">
        <ul className="flex gap-3 flex-col">
          <li className="font-bold text-lg text-center hover:text-sky-500 px-2">
            My dashboard
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-profile"
            )}`}
          >
            <Link
              to="my-profile"
              className="text-lg text-black flex items-center"
            >
              <AiOutlineUser className="mr-2" />
              Profile
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "change-password"
            )}`}
          >
            <Link
              to="change-password"
              className="text-lg text-black flex items-center"
            >
              <AiOutlineKey className="mr-2" />
              Change password
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-orders"
            )}`}
          >
            <Link
              to="my-orders"
              className="text-lg text-black flex items-center"
            >
              <AiOutlineShopping className="mr-2" />
              My Orders
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "download"
            )}`}
          >
            <Link
              to="download"
              className="text-lg text-black flex items-center"
            >
              <RiDownload2Line className="mr-2" />
              Download
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-wishlists"
            )}`}
          >
            <Link
              to="my-wishlists"
              className="text-lg text-black flex items-center"
            >
              <RiHeartLine className="mr-2" />
              My Wishlist
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-question"
            )}`}
          >
            <Link
              to="my-question"
              className="text-lg text-black flex items-center"
            >
              <RiQuestionLine className="mr-2" />
              My Question
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-refunds"
            )}`}
          >
            <Link
              to="my-refunds"
              className="text-lg text-black flex items-center"
            >
              <RiRefund2Line className="mr-2" />
              My Refund
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-reports"
            )}`}
          >
            <Link
              to="my-reports"
              className="text-lg text-black flex items-center"
            >
              <RiFileList2Line className="mr-2" />
              My Reports
            </Link>
          </li>
          <li
            className={`text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${isActiveLink(
              "my-cards"
            )}`}
          >
            <Link
              to="/my-cards"
              className="text-lg text-black flex items-center"
            >
              <RiSdCardLine className="mr-2" />
              My Cards
            </Link>
          </li>
          <li className="mt-auto text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <button
              onClick={handleLogOut}
              type="button"
              className="flex items-center"
            >
              <RiLogoutBoxLine className="mr-2" />
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileSidebar;
