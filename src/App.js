import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
// import Contact from "./components/Contact.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Offline from "./components/Offline.js";

import useOnlineStatus from "./utils/useOnlineStatus.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import React, { lazy, Suspense } from "react";         // now import Contact page via lazy load
const Contact = lazy(() => import('./components/Contact.js'))

import "../index.css";

const AppLayout = () => {

  const onlineStatus = useOnlineStatus();

  return (
    <div className="container">
      <Header></Header>

      {
        onlineStatus ? <Outlet /> : <Offline />
      }

      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: Body
      },
      {
        path: '/about',
        element: <About content='About us' />
      },
      {
        path: '/contact',
        element: <Suspense fallback={<div>Loading.....</div>}><Contact /></Suspense>
      },
      {
        path: '/restaurant/:resId',
        Component: RestaurantMenu
      },
      {
        path: '*',
        element: <ErrorBoundary />,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)