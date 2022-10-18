import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/home/Home'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Signup = React.lazy(() => import('./pages/signup/Signup'));
const SingleProduct= React.lazy(() => import('./pages/singleProduct/SingleProduct'));

const Main = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:_id" element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Main;