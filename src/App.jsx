import { useState } from 'react'

import {Navbar} from "./components/Client/Navbar/Navbar.jsx";
import "./app.css";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Tour from "./pages/Client/Tour/Tour.jsx";
import Attraction from "./pages/Client/Attraction/Attraction.jsx";
import Resort from "./pages/Client/Resort/Resort.jsx";
import Flight from "./pages/Client/Flight/Flight.jsx";
import FlightSearch from "./components/Common/FlightSearch/FlightSearch.jsx";
import Login from "./pages/Client/Login/Login.jsx";
import Register from "./pages/Client/Register/Register.jsx";
import AdmNavBar from "./components/Admin/NavBar/AdmNavBar.jsx";
import AdFlight from "./pages/Admin/Flight/AdFlight.jsx";
import AdResort from "./pages/Admin/Resort/AdResort.jsx";
import AdAttraction from "./pages/Admin/Attraction/AdAttraction.jsx";
import AdTour from "./pages/Admin/Tour/AdTour.jsx";
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
            <div className="">
                <AdmNavBar/>

                <div className="">
                    <Outlet/>
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
            element: <AdminLayout/>,
            children: [
                {
                    path: "/admin/tour",
                    element: <AdTour/>
                },
                {
                    path: "/admin/attraction",
                    element: <AdAttraction />
                },
                {
                    path: "/admin/resort",
                    element: <AdResort />
                },
                {
                    path: "/admin/flight",
                    element: <AdFlight />
                },
            ]
        }
    ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
