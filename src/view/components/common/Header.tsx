import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/attachment_109048124.png";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <div className="py-3 px-3">
      <div className="flex items-center justify-between">
        {/* logo link */}
        <div className="border rounded">
          <Link to="/">
            <img src={logo} alt="" className="w-12 " />
          </Link>
        </div>
        {/* search input filed */}
        <div>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                size={20}
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </div>
        <div className="flex justify-around align-center">
          {/* wishlist */}
          <div className="mx-2 rounded-full font-bold">
            <Link to="/wishlist">
              <span>
                <BsHeart size={20} className="text-yellow-500" />
              </span>
            </Link>
          </div>
          {/* cart */}
          <div className="mx-2">
            <Link to="/cart">
              <span>
                <BsCart3 size={20} className="text-yellow-500" />
              </span>
            </Link>
          </div>
          {/* dashboard link */}
          <div className="mx-2">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          {!user ? (
            <div>
              <Link to="/account">
                <span>
                  <VscAccount size={20} />
                </span>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
