import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../routes/routes';

const Main = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        {
          routes.map((route,idx)=>{
            return (route.element&& (<Route element={<route.element/>} path={route.path} key={idx}></Route>))
          
          })
        }
        </Routes>
      </Suspense>
    </>
  );
};

export default Main;