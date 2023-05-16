import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../../features/auth/authSlice";

const UserProfileSidebar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="col-span-2 bg-gradient-to-r from-yellow-400 h-[calc(100vh-25px)] p-5 rounded-lg shadow-md hover:bg-amber-200">
      <ul className="flex gap-3 flex-col h-full">
        <li className="font-bold text-lg text-center hover:text-sky-500 px-2 ">
          user dashboard
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="/profile" className="text-lg text-black">
            profile
          </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="change-password"> Change password</Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-orders"> My Orders </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="download"> DownLoad </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-wishlists"> My WishList </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-question"> My question </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-refunds"> My Refund </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-reports"> My Reports </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="my-cards"> My Cards </Link>
        </li>
        <li className="mt-auto text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <button onClick={handleLogOut} type="button">
            {" "}
            Log out{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileSidebar;
