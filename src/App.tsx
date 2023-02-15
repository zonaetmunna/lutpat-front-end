import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { store } from './reudx-toolkit/store';
import { routes } from './routes/routes';


function App() {
  return (
    
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={routes} />
        </Suspense>
    </Provider>
  );
};

export default App;
