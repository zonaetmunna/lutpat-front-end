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

  const options = [
    { value: "all", label: "All" },
    { value: "books", label: "Books" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "sports", label: "Sports" },
  ];

  return (
    <div className="py-3 px-3 bg-stone-50 border-b border-white-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo link */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="" className="h-8 w-auto " />
            </Link>
          </div>
          {/* search input filed */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div>
              <Select options={options} className="w-48 mr-2" />
            </div>
            <div className="mx-2 rounded-full font-bold">
              <Link to="/shop">
                <p className="text-yellow-500">Shop</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-around items-center">
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
            {user && (
              <div className="mx-2">
                <Link to="/dashboard">Dashboard</Link>
              </div>
            )}
            {user ? (
              <div className="mx-3">
                <button onClick={handleLogOut}>
                  <span>
                    <VscAccount size={20} />
                  </span>
                </button>
              </div>
            ) : (
              <div className="mx-3">
                <Link to="/login">Login</Link>
              </div>
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
