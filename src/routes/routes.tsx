import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Error from "../view/layout/Error";
import Dashboard from "../view/layout/Dashboard";
import AllProduct from "../view/pages/dashboard/adminDashboard/AllProduct";
import MakeAdmin from "../view/pages/dashboard/adminDashboard/MakeAdmin";
import AddProduct from "../view/pages/dashboard/adminDashboard/AddProduct";
import AdminDashboard from "../view/pages/dashboard/adminDashboard/AdminDashboard";
import UserDashboard from "../view/pages/dashboard/userDashboard/UserDashboard";
import MarchentDashboard from "../view/pages/dashboard/marchentDashboard/MarchentDashboard";
const Main = React.lazy(() => import("../view/layout/Main"));
const Home = React.lazy(() => import("../view/pages/main/Home"));
const SingleProduct = React.lazy(
  () => import("../view/pages/main/SingleProduct")
);
const SignUp = React.lazy(() => import("../view/pages/main/SignUp"));
const Login = React.lazy(() => import("../view/pages/main/Login"));
const Cart = React.lazy(() => import("../view/pages/main/Cart"));
const Wishlist = React.lazy(() => import("../view/pages/main/WishList"));
const Checkout = React.lazy(() => import("../view/pages/main/Checkout"));
const Contact = React.lazy(() => import("../view/pages/main/Contact"));
const PrivacyPolicy = React.lazy(
  () => import("../view/pages/main/PrivacyPolicy")
);
const TermCondition = React.lazy(
  () => import("../view/pages/main/TermsCondition")
);
const About = React.lazy(() => import("../view/pages/main/About"));

export const routes = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "Checkout",
        element: <Checkout />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "TermCondition",
        element: <TermCondition />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "all-product",
        element: <AllProduct />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "merchant-dashboard",
        element: <MarchentDashboard />,
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
