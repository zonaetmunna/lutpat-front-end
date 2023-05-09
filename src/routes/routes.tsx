import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Error from "../view/layout/Error";
import Dashboard from "../view/layout/Dashboard";
import AllProduct from "../view/pages/dashboard/products/AllProduct";
import MakeAdmin from "../view/pages/dashboard/adminDashboard/MakeAdmin";
import AddProduct from "../view/pages/dashboard/products/AddProduct";
import AdminDashboard from "../view/pages/dashboard/adminDashboard/AdminDashboard";
import UserDashboard from "../view/pages/dashboard/userDashboard/UserDashboard";
import MarchentDashboard from "../view/pages/dashboard/marchentDashboard/MarchentDashboard";
import VendorProfile from "../view/pages/dashboard/vendors/VendorProfile";
import CustomerList from "../view/pages/dashboard/customers/CustomerList";
import SingleCustomer from "../view/pages/dashboard/customers/SingleCustomer";
import OrderDetails from "../view/pages/dashboard/orders/OrderDetails";
import OrderList from "../view/pages/dashboard/orders/OrderList";
import VendorList from "../view/pages/dashboard/vendors/VendorList";
import Invoice from "../view/pages/dashboard/invoice/Invoice";
import Message from "../view/pages/dashboard/message/Message";
import DashboardDefault from "../view/pages/dashboard/dashboardDefault/DashboardDefault";
import ShopList from "../view/pages/dashboard/shop/ShopList";
import SingleShop from "../view/pages/dashboard/shop/SingleShop";
import PrivateRoute from "./PrivateRoute";
import Shop from "../view/pages/main/shop/Shop";
import ShopDetails from "../view/pages/main/shop/ShopDetails";
import SellerRegistration from "../view/pages/main/account/SellerRegistration";
import Offer from "../view/pages/main/offer/Offer";
import Faq from "../view/pages/main/faq/Faq";
import Settings from "../view/pages/dashboard/settings/Settings";
const Main = React.lazy(() => import("../view/layout/Main"));
const Home = React.lazy(() => import("../view/pages/main/home/Home"));
const SingleProduct = React.lazy(
  () => import("../view/pages/main/home/SingleProduct")
);
const SignUp = React.lazy(() => import("../view/pages/main/account/SignUp"));
const Login = React.lazy(() => import("../view/pages/main/account/Login"));
const Cart = React.lazy(() => import("../view/pages/main/cart/Cart"));
const Wishlist = React.lazy(
  () => import("../view/pages/main/wishlist/WishList")
);
const Checkout = React.lazy(
  () => import("../view/pages/main/checkout/Checkout")
);
const Contact = React.lazy(() => import("../view/pages/main/contact/Contact"));
const PrivacyPolicy = React.lazy(
  () => import("../view/pages/main/privacy/PrivacyPolicy")
);
const TermCondition = React.lazy(
  () => import("../view/pages/main/terms/TermsCondition")
);
const About = React.lazy(() => import("../view/pages/main/about/About"));

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
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ShopDetails />,
      },
      {
        path: "offer",
        element: <Offer />,
      },
      {
        path: "faq",
        element: <Faq />,
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
        path: "seller-registration",
        element: <SellerRegistration />,
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
        path: "about",
        element: <About />,
      },
      {
        path: "privacy",
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardDefault />,
      },
      {
        path: "product-list",
        element: <AllProduct />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
      {
        path: "product-add",
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
      {
        path: "shop-list",
        element: <ShopList />,
      },
      /* {
        path: "shop/:id",
        element: <SingleShop />,
      }, */
      {
        path: "vendor-list",
        element: <VendorList />,
      },
      {
        path: "vendor/:id",
        element: <VendorProfile />,
      },
      {
        path: "customer-list",
        element: <CustomerList />,
      },
      {
        path: "customer/:id",
        element: <SingleCustomer />,
      },
      {
        path: "order-list",
        element: <OrderList />,
      },
      {
        path: "order/:id",
        element: <OrderDetails />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
