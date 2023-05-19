import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Error from "../view/layout/Error";
import AdminDashboard from "../view/layout/AdminDashboard";
import AllProduct from "../view/pages/dashboard/products/AllProduct";
import MakeAdmin from "../view/pages/dashboard/makeAdmin/MakeAdmin";
import AddProduct from "../view/pages/dashboard/products/AddProduct";

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
import Shop from "../view/pages/main/shop/Shop";
import ShopDetails from "../view/pages/main/shop/ShopDetails";
import SellerRegistration from "../view/pages/main/account/SellerRegistration";
import Offer from "../view/pages/main/offer/Offer";
import Faq from "../view/pages/main/faq/Faq";
import Settings from "../view/pages/dashboard/settings/Settings";
import UserProfile from "../view/pages/main/userProfile/UserProfile";
import SellerPrivateRoute from "./SellerPrivateRoute";
import SellerDashboard from "../view/layout/SellerDashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import UserPrivateRoute from "./UserPrivateRoute";
import SellerDashboardDefault from "../view/pages/sellerDashboard/sellerDashboardDefault/SellerDashboardDefault";
import UserProfileManage from "../view/pages/main/userProfile/UserProfileManage";
import UserChangePassword from "../view/pages/main/userProfile/UserChangePassword";
import UserOrders from "../view/pages/main/userProfile/UserOrders";
import UserDownload from "../view/pages/main/userProfile/UserDownload";
import UserWishlist from "../view/pages/main/userProfile/UserWishlist";
import UserQuestion from "../view/pages/main/userProfile/UserQuestion";
import UserRefunds from "../view/pages/main/userProfile/UserRefunds";
import UserReports from "../view/pages/main/userProfile/UserReports";
import UserCards from "../view/pages/main/userProfile/UserCards";
import SellerShopList from "../view/pages/sellerDashboard/sellerShopList/SellerShopList";
import SellerRefunds from "../view/pages/sellerDashboard/sellerRefunds/SellerRefunds";
import Shippings from "../view/pages/sellerDashboard/Shippings/Shippings";
import SellerWithdrawals from "../view/pages/sellerDashboard/sellerWithdrawals/SellerWithdrawals";
import CategoryList from "../view/pages/dashboard/category/CategoryList";
import Payment from "../view/pages/main/payment/Payment";
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
        element: (
          <UserPrivateRoute>
            <Checkout />
          </UserPrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <UserPrivateRoute>
            <Payment />
          </UserPrivateRoute>
        ),
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
      {
        path: "profile",
        element: (
          <UserPrivateRoute>
            <UserProfile />
          </UserPrivateRoute>
        ),
        children: [
          {
            path: "my-profile",
            element: <UserProfileManage />,
          },
          {
            path: "change-password",
            element: <UserChangePassword />,
          },
          {
            path: "my-orders",
            element: <UserOrders />,
          },
          {
            path: "download",
            element: <UserDownload />,
          },
          {
            path: "my-wishlists",
            element: <UserWishlist />,
          },
          {
            path: "my-question",
            element: <UserQuestion />,
          },
          {
            path: "my-refunds",
            element: <UserRefunds />,
          },
          {
            path: "my-reports",
            element: <UserReports />,
          },
          {
            path: "my-cards",
            element: <UserCards />,
          },
        ],
      },
    ],
  },
  // admin dashboard layout
  {
    path: "/admin-dashboard",
    element: (
      <AdminPrivateRoute>
        <AdminDashboard />
      </AdminPrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/admin-dashboard",
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
        path: "shop-list",
        element: <ShopList />,
      },
      {
        path: "category-list",
        element: <CategoryList />,
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
        path: "message",
        element: <Message />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  // seller dashboard
  {
    path: "/seller-dashboard",
    element: (
      <SellerPrivateRoute>
        <SellerDashboard />
      </SellerPrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "seller-dashboard",
        element: <SellerDashboardDefault />,
      },
      {
        path: "seller-shop-list",
        element: <SellerShopList />,
      },
      {
        path: "product-list",
        element: <AllProduct />,
      },
      {
        path: "product-add",
        element: <AddProduct />,
      },
      {
        path: "category-list",
        element: <CategoryList />,
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
        path: "seller-refunds",
        element: <SellerRefunds />,
      },
      {
        path: "shippings",
        element: <Shippings />,
      },
      {
        path: "withdrawals",
        element: <SellerWithdrawals />,
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
