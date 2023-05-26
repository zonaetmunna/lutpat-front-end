import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Toaster />
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  );
}

export default App;
