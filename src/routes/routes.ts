import { React } from 'react';


const Home = React.lazy(() => import("../view/pages/home/Home"));
const SingleProduct = React.lazy(() => import("../view/pages/singleProduct/SingleProduct"));
const Login = React.lazy(() => import("../view/pages/Login/Login"));
const Signup = React.lazy(() => import("../view/pages/signup/Signup"));
const AdminDashboard = React.lazy(() => import("../view/pages/dashboard/AdminDashboard"));
const marchentDashBoard = React.lazy(() => import("../view/pages/dashboard/MarchentDashboard"));


const getRoleBasedDashboard = (role: string) => {
  switch (role) {
    case 'admin':
      return AdminDashboard;
        
    case 'marchent':
      return marchentDashBoard;
          
    default:
      return null;
  }
};


const routes = [
  {
    path: '/',
    name: 'home',
    element: Home,
    role: ['*']

  },
  {
    path: '/product/:id',
    name: 'singleProduct',
    element: SingleProduct,
    role: ['*']

  },
  {
    path: '/signup',
    name: 'signup',
    element: Signup,
    role: ['*']
  },
  {
    path: '/login',
    name: 'login',
    element: Login,
    role: ['*']
  },
 /*  {
    path: '/dashboard',
    name: 'dashboard',
    element: getRoleBasedDashboard(role),
    role: ['admin', 'merchant']
  }, */
  /* {
    path: '/admin',
    name: 'only for admin',
    element: Secret,
    role: ['admin']

  } */
];


export default routes;