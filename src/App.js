import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import "../index.css";

const AppLayout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet />
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
        Component: About
      },
      {
        path: '/contact',
        Component: Contact
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