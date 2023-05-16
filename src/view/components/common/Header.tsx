import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/attachment_109048124.png";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { logOut } from "../../../features/auth/authSlice";
import Select from "react-select";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  console.log(user);
  console.log(user?.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="py-3 px-3 bg-stone-50 border-b border-white-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="" className="h-8 w-auto " />
            </Link>
          </div>
          {/* Search Input and Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/shop" className="mx-2 font-bold text-yellow-500">
              Shop
            </Link>
            <Link to="/offer" className="mx-2 font-bold text-yellow-500">
              Offer
            </Link>
            <Link to="/faq" className="mx-2 font-bold text-yellow-500">
              Faq
            </Link>
            <Link to="/contact" className="mx-2 font-bold text-yellow-500">
              Contact
            </Link>
          </div>
          {/* User Actions */}
          <div className="flex justify-around items-center">
            <Link to="/wishlist" className="mx-2">
              <BsHeart size={20} className="text-yellow-500" />
            </Link>

            <Link to="/cart" className="mx-2">
              <BsCart3 size={20} className="text-yellow-500" />
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="mx-2">
                  Dashboard
                </Link>
                <button onClick={handleLogOut} className="mx-2">
                  <VscAccount size={20} />
                </button>
              </>
            ) : (
              <Link to="/login" className="mx-2">
                Login
              </Link>
            )}
            <Link
              to="/seller-registration"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
