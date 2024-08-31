import { useState } from 'react'

import {Navbar} from "./components/Client/Navbar/Navbar.jsx";
import "../src/style/global.scss";

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Tour from "./pages/Client/Tour/Tour.jsx";
import Attraction from "./pages/Client/Attraction/Attraction.jsx";
import Resort from "./pages/Client/Resort/Resort.jsx";
import Flight from "./pages/Client/Flight/Flight.jsx";
import FlightSearch from "./components/Common/FlightSearch/FlightSearch.jsx";
import Login from "./pages/Client/Login/Login.jsx";
import Register from "./pages/Client/Register/Register.jsx";
import AdminNavBar from "./components/Admin/NavBar/AdminNavBar.jsx";
function App() {

    //tạo layout
    const Layout = () => {
        return (
            <div className="">
                <Navbar/>

                <div className="">
                    <Outlet/>
                </div>
            </div>
        );
    }

    //admin layout
    const AdminLayout = () => {
        return (
            <div className="main">
                <div className="container">

                    <div className="menuContainer">
                        <AdminNavBar/>
                    </div>

                    <div className="contentContainer">
                        <Outlet/>
                    </div>
                </div>
            </div>
        );
    }

    //tạo router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Tour/>
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
                {
                    path: "/flights/search",
                    element: <FlightSearch />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/admin",
            element: <AdminLayout/>
        }
    ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
