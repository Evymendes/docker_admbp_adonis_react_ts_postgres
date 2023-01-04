import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { NotFound } from '../fragments/frontend/Response';

import {
    Home,
    About
} from '../pages'

export const NavegateFrontendRouter = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/about', element: <About />, errorElement: <NotFound /> },

    { path: '/', element: <></>, errorElement: <></> }
])

export default NavegateFrontendRouter