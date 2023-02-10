import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Login, Register } from "../components/Account";
import { Recover } from "../components/Account/Recover";
import { NotFound } from '../fragments/frontend/Response';
import { Dashboard } from "../pages/backend";

import {
    Home,
    About,
    Sermons,
    Missions,
    Event,
    News,
    Live,
    Contacts
} from '../pages/frontend'

export const NavegateRouter = createBrowserRouter([
    
    //#region Frontend
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/about', element: <About />, errorElement: <NotFound /> },
    { path: '/sermons', element: <Sermons />, errorElement: <NotFound /> },
    { path: '/missions', element: <Missions />, errorElement: <NotFound /> },
    //{ path: '/sermons/details', element: <Sermons />, errorElement: <NotFound /> },
    { path: '/events', element: <Event />, errorElement: <NotFound /> },
    //{ path: '/events/details', element: <Event />, errorElement: <NotFound /> },
    { path: '/news', element: <News />, errorElement: <NotFound /> },
    //{ path: '/news/details', element: <News />, errorElement: <NotFound /> },
    { path: '/live', element: <Live />, errorElement: <NotFound /> },
    { path: '/contacts', element: <Contacts />, errorElement: <NotFound /> },
    //{ path: '/', element: <></>, errorElement: <></> }
    //#endregion Frontend


    //#region Account
    { path: '/login', element: <Login/>, errorElement: <NotFound /> },
    { path: '/register', element: <Register/>, errorElement: <NotFound /> },
    { path: '/recover', element: <Recover/>, errorElement: <NotFound /> },
    //#endregion Account
    

    //#region Backend
    { path: '/admin/dashboard/', element: <Dashboard/>, errorElement: <NotFound /> },
    // { path: '/admin/dashboard/', element: <Dashboard/>, errorElement: <NotFound /> },

    //#endregion Backend
])

export default NavegateRouter