import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../components/Home/Home";
import NotFound from "../components/Home/FileNotFound";
import Main from "../components/Layout/Main";
import LoadData from '../components/shared/LoadData';
import UserDetails from '../components/shared/UserDetails';
import Dashboard from '../components/Layout/Dashboard';
import Timeline from '../components/Dashboard/Timeline';
import Orders from '../components/Dashboard/Orders';
import BestSell from '../components/Home/Best Selling Products/BestSell';
import MobileStore from '../components/Home/Mobile Store/MobileStore';
import Products from '../components/Layout/Products';
import ProductDetails from '../components/Layout/ProductDetails';
import Account from '../components/Layout/Account';
import Profile from '../components/Account/Profile';
import MyOrder from '../components/Account/MyOrder';
import MyProductReview from '../components/Account/MyProductReview';
import ManageAddress from '../components/Account/ManageAddress';
import CheckOut from '../components/Layout/CheckOut';
import Cart from '../components/Checkout/Cart';
import Address from '../components/Checkout/Address';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path:"/loadData",
            loader: async () => {
              return fetch('https://jsonplaceholder.typicode.com/users')
            },
            element:<LoadData></LoadData>,
          },
          
            {
              path:"/loadData/:userDetails",
              loader: async ({params}) => {
                return fetch(`https://jsonplaceholder.typicode.com/users/${params.userDetails}`)
              },
              element:<UserDetails></UserDetails>
            },
          {
            path: "*",
            element: <NotFound />,
          },
          {
            path: "/product/",
            element: <Products />,
            children:[
                {
                  path:"/product/best-selling",
                  element:<BestSell></BestSell>
              },
              {
                path:"/product/mobile-store",
                element:<MobileStore></MobileStore>
            }
            ]
          },
          {
            path:"/product-details/:id",
            element: <ProductDetails></ProductDetails>

          },
          {
            path: "/checkout/",
            element: <CheckOut />,
            children:[
                {
                  path:"/checkout/cart",
                  element:<Cart></Cart>
              },
              {
                path:"/checkout/address",
                element:<Address></Address>
              }
             
            ]
          },
          {
            path:"/product-details/:id",
            element: <ProductDetails></ProductDetails>

          },{
            path:"/account",
            element: <Account></Account>,
            children:[
              {
                path: "/account/profile",
                element: <Profile></Profile>
            },
            {
              path: "/account/myorder",
              element: <MyOrder></MyOrder>
          },
          {
            path: "/account/review",
            element: <MyProductReview></MyProductReview>
        },
        {
          path: "/account/address",
          element: <ManageAddress></ManageAddress>
      }
            ]
          },
          {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
            children:[
              {
                path:"/dashboard/timeline",
                element:<Timeline></Timeline>
            },
            {
              path:"/dashboard/orders",
              element:<Orders></Orders>
          }
            ]
          },
     
        ],
      },
  ]);
  export default routes;