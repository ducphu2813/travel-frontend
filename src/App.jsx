import { useState } from 'react'

import {Navbar} from "./components/Navbar/Navbar.jsx";
import "./app.css";

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Tour from "./pages/Tour.jsx";
import Attraction from "./pages/Attraction.jsx";
import Resort from "./pages/Resort.jsx";
import Flight from "./pages/Flight.jsx";
function App() {

    //tạo layout
    const Layout = () => {
        return (
            <div className="main">
                <Navbar/>

                <div className="contentContainer">
                    <Outlet/>
                </div>
            </div>
        );
    }

    //tạo router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Tour />
                },
                {
                    path: "/attractions",
                    element: <Attraction />
                },
                {
                    path: "/resorts",
                    element: <Resort />
                },
                {
                    path: "/flights",
                    element: <Flight />
                },
            ]
        }
    ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
