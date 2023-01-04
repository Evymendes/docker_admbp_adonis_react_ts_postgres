import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { NotFound } from '../fragments/frontend/Response';

import {
    Home,
    About,
    Sermons,
    Event,
    News
} from '../pages/frontend'

export const NavegateFrontendRouter = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/about', element: <About />, errorElement: <NotFound /> },
    { path: '/sermons', element: <Sermons />, errorElement: <NotFound /> },
    //{ path: '/sermons/details', element: <Sermons />, errorElement: <NotFound /> },
    { path: '/events', element: <Event />, errorElement: <NotFound /> },
    //{ path: '/events/details', element: <Event />, errorElement: <NotFound /> },
    { path: '/news', element: <News />, errorElement: <NotFound /> },
    //{ path: '/news/details', element: <News />, errorElement: <NotFound /> },

    { path: '/', element: <></>, errorElement: <></> }
])

export default NavegateFrontendRouter