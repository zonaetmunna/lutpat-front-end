import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Error from "../view/layout/Error";
import Dashboard from "../view/layout/Dashboard";
import AllProduct from "../view/pages/dashboard/adminDashboard/AllProduct";
import MakeAdmin from "../view/pages/dashboard/adminDashboard/MakeAdmin";
import AddProduct from "../view/pages/dashboard/adminDashboard/AddProduct";
const Main = React.lazy(() => import("../view/layout/Main"));
const Home = React.lazy(() => import("../view/pages/main/Home"));
const SingleProduct = React.lazy(
  () => import("../view/pages/main/SingleProduct")
);
const Signup = React.lazy(() => import("../view/pages/main/SignUp"));
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
        element: <Signup />,
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
    ],
  },
]);
