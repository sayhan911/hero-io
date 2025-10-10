import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import Applications from "../pages/Applications/Applications";
import AppDetails from "../pages/AppDetails/AppDetails";
import PageLoader from "../components/PageLoader/PageLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <PageLoader></PageLoader>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("../application.json"),
      },
      {
        path: "/apps",
        // Component: Applications,
        element: <Applications></Applications>,
        loader: () => fetch("../application.json"),
      },
      {
        path: "/apps/:id",
        // Component: AppDetails,
        element: <AppDetails></AppDetails>,
        loader: () => fetch("../application.json"),
      },
      {
        path: "/installation",
        // Component: Installation,
        element: <Installation></Installation>,
        loader: () => fetch("../application.json"),
      },
    ],
  },
]);
