import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Root from './Root/Root';
import Errorpage from './Pages/Errorpage/Errorpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Property from './Pages/Property/Property';
import PropertyDetails from "./Pages/Property/PropertyDetails";
import Sustainability from './Pages/Sustainability/Sustainability';
import Communities from './Pages/Communities/Communities';
import RegionsDetails from './Components/Regions/RegionsDetails';
import Community360 from './Pages/New/Community360';
import Blog from './Pages/New/Blog';
import InternationalProject from './Pages/New/InternationalProject';
const helmetContext = {};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("Data.json"),
      },
      {
        path: "/sustainability",
        element: <Sustainability></Sustainability>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/communities",
        element: <Communities></Communities>,
      },
      {
        path: "/community360",
        element: <Community360></Community360>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/international",
        element: <InternationalProject></InternationalProject>,
      },
      {
        path: "/regions/:areaName",
        element: <RegionsDetails></RegionsDetails>,
        loader: () => fetch("Data.json"),
      },
      {
        path: "/property",
        element: <Property></Property>,
      },
      {
        path: "/propertyDetails/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch("Data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
