import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createHashRouter, RouterProvider } from "react-router-dom";

import './index.css'

import Layout from './components/layout/Layout.tsx';
import Home from './components/Home/Home.tsx';
import PageNotFound from './components/Home/PageNotFound.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);