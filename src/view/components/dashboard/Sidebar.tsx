import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const merchantRoutes = [
    {
      name: "all Products",
      path: "all-products",
    },
    {
      name: "Add Products",
      path: "add-products",
    },
  ];

  const adminRoutes = [
    {
      name: "all product",
      path: "all-product",
    },
    {
      name: "add product",
      path: "add-product",
    },
    {
      name: "make admin",
      path: "make-admin",
    },
  ];
  const userRoutes = [
    {
      name: "account",
      path: "User-account",
    },
  ];

  return (
    <div className="col-span-2 bg-yellow-400 h-[calc(100vh-25px)] p-5 rounded-lg shadow-md hover:bg-amber-200">
      <h4 className="font-bold text-lg text-center hover:text-sky-500 px-2 ">
        Merchant Dashboard
      </h4>
      <ul className="flex gap-3 flex-col h-full">
        {user?.role === "merchant" &&
          merchantRoutes.map(({ name, path }) => (
            <li>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-2 rounded-full"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        {user?.role === "admin" &&
          adminRoutes.map(({ name, path }) => (
            <li>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-2 rounded-full"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        {user?.role === "user" &&
          userRoutes.map(({ name, path }) => (
            <li>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-2 rounded-full"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}

        <li className="mt-auto text-center font-normal">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
