import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Dashboard, NotFound } from "../fragments";
import {} from '../pages/frontend'

export const NavegateBackendRouter = createBrowserRouter([
    { path: '/dashboard/home/', element: <Dashboard />, errorElement: <NotFound /> },
])

export default NavegateBackendRouter