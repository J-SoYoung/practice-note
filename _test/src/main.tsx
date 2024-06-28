import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import Home from "./pages/Home.tsx";
import UsedHome from "./pages/UsedHome.tsx";
import UsedDetail from './pages/UsedDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/usedHome", element: <UsedHome /> },
      { path: "/usedDetail:/id", element: <UsedDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
