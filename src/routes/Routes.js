import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../components/Home/Home";
import Prod from "../components/Home/Feature";
import NotFound from "../components/Home/FileNotFound";
import Main from "../components/Home/Layout/Main";
const routes = createBrowserRouter([
    {
        path: "/",
        // element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/product",
            element: <Prod />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
     
        ],
      },
  ]);
  export default routes;