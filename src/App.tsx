import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { store } from './reudx-toolkit/store';
import Layout from './view/Layout';

function App() {
  return (
    
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
  );
}

export default App;
