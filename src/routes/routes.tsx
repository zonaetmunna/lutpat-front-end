import  React, { FC }  from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Error from '../view/layout/Error';
import WishList from '../view/pages/main/WishList';

const Main = React.lazy(() => import('../view/layout/Main'));
const Home = React.lazy(() => import('../view/pages/main/Home'));
const SingleProduct = React.lazy(() => import('../view/pages/main/SingleProduct'));
const Signup = React.lazy(() => import('../view/pages/main/Signup'));
const Login = React.lazy(() => import('../view/pages/main/Login'));
const Cart = React.lazy(() => import('../view/pages/main/Cart'));
const Wishlist = React.lazy(() => import('../view/pages/main/WishList'));
const Checkout = React.lazy(() => import('../view/pages/main/Checkout'));
const Contact = React.lazy(() => import('../view/pages/main/Contact'));
const PrivacyPolicy = React.lazy(() => import('../view/pages/main/PrivacyPolicy'));
const TermCondition = React.lazy(() => import('../view/pages/main/TermsCondition'));
const About = React.lazy(() => import('../view/pages/main/About'));



export const routes = createBrowserRouter([
  // main layout
  {
    path: '/',
    element: <Main/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'product/:id',
        element: <SingleProduct/>,
      },
      {
        path: 'signup',
        element: <Signup/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'cart',
        element: <Cart/>,
      },
      {
        path: 'wishlist',
        element: <WishList/>,
      },
    ]
    
   
  }
]);
