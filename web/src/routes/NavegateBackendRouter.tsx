import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import {} from '../pages/frontend'

export const NavegateBackendRouter = createBrowserRouter([
    { path: '/', element: <></>, errorElement: <></> },
    { path: '/', element: <></>, errorElement: <></> }
])

export default NavegateBackendRouter